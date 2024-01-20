'use server';

import { z } from 'zod';
import bcrypt from 'bcrypt';
import { user } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

import db from '@/db';

const UserSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .max(50, { message: 'Email must be less than 50 characters' }),
  password: z
    .string()
    .min(1, { message: 'Password is required' })
    .max(50, { message: 'Password must be less than 50 characters' })
});

const NewUserSchema = UserSchema.extend({
  name: z
    .string()
    .min(1, { message: 'Name is required' })
    .max(50, { message: 'Name must be less than 50 characters' })
});

export async function register(formData: FormData) {
  const { email, password, name } = NewUserSchema.parse({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    name: formData.get('name') as string
  });

  try {
    // check if user already exists
    const users = await db
      .select()
      .from(user)
      .where(eq(user.email, email));

    if (users.length > 0) {
      return {
        success: false,
        message: 'User already exists.'
      }
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await db
      .insert(user)
      .values({
        name,
        email,
        password: hashedPassword
      })
  }
  catch (error) {
    console.error(error);

    return {
      success: false,
      message: 'Failed to register.'
    }
  }

  redirect('/login');
}

export async function login(formData: FormData) {
  const { email, password } = UserSchema.parse({
    email: formData.get('email') as string,
    password: formData.get('password') as string
  });

  try {
    const users = await db
      .select()
      .from(user)
      .where(eq(user.email, email));
    
    // validate if user exists
    if (users.length === 0) {
      return {
        success: false,
        message: 'User not found.'
      }
    }

    const userData = users[0];

    // validate if user is active
    if (!userData.is_active) {
      return {
        success: false,
        message: 'User is not active.'
      }
    }
    
    // validate if password is correct
    const isPasswordCorrect = await bcrypt.compare(password, userData.password);
    if (!isPasswordCorrect) {
      return {
        success: false,
        message: 'Incorrect password.'
      }
    }

    // create token data
    const tokenData = {
      id: userData.id,
      name: userData.name,
      email: userData.email,
    }

    const secretKey = process.env.JWT_SECRET as string || '';
    const MAX_AGE = 60 * 60 * 24; // 1 day

    // generate token
    const token = jwt.sign(
      tokenData,
      secretKey,
      { expiresIn: MAX_AGE }
    );

    // Set-Cookie header
    cookies().set({
      name: 'token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: MAX_AGE,
      path: '/'
    });
  }
  catch (error) {
    console.error(error);
    return {
      success: false,
      message: 'Failed to login.'
    }
  }

  redirect('/property');
}

export async function logout() {
  cookies().delete('token');
  redirect('/login');
}