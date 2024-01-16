'use server';

import db from '@/db';
import { property } from '@/db/schema';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { eq } from 'drizzle-orm';

const PropertySchema = z.object({
  id: z
    .number()
    .min(1, { message: 'ID is required' }),
  name: z
    .string()
    .min(1, { message: 'Name is required' })
    .max(50, { message: 'Name must be less than 50 characters' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .max(50, { message: 'Email must be less than 50 characters' }),
  password: z
    .string()
    .min(1, { message: 'Password is required' })
    .max(50, { message: 'Password must be less than 50 characters' }),
  timezone: z
    .string()
    .min(1, { message: 'Timezone is required' })
    .max(50, { message: 'Timezone must be less than 50 characters' }),
  contact_number: z
    .string()
    .max(50, { message: 'Contact number must be less than 50 characters' }),
  is_active: z.boolean()
});

const NewProperty = PropertySchema.omit({ id: true, is_active: true })
const EditProperty = PropertySchema.omit({ id: true }).extend({ password: z.string() });

export async function addProperty(formData: FormData) {
  const { name, email, password, timezone, contact_number } = NewProperty.parse({
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    timezone: formData.get('timezone') as string,
    contact_number: formData.get('contact_number') as string,
  });

  // encrypt the password
  let encryptedPassword = '';
  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err;
    
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) throw err;
      encryptedPassword = hash;
    })
  })

  try {
    await db
      .insert(property)
      .values({
        name,
        email,
        password: encryptedPassword,
        timezone,
        contact_number
      });
  }
  catch (error) {
    console.log(error);
    return {
      success: false,
      message: 'Failed to add property.'
    }
  }

  revalidatePath('/property');
  redirect('/property');
}

export async function editProperty(formData: FormData) {
  const { name, email, password, timezone, contact_number, is_active } = EditProperty.parse({
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    timezone: formData.get('timezone') as string,
    contact_number: formData.get('contact_number') as string,
    is_active: formData.get('is_active') === 'true'
  });
  
  const body: PropertySchema = { name, email, timezone, contact_number, is_active };

  if (password) {
    // encrypt the password
    bcrypt.genSalt(10, (err, salt) => {
      if (err) throw err;
      
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) throw err;
        body.password = hash;
      })
    });
  }

  try {
    await db
      .update(property)
      .set(body)
      .where(eq(property.id, Number(formData.get('id'))));
  }
  catch (error) {
    console.error("[property.ts] editProperty - error:", error);
    return {
      success: false,
      message: 'Failed to edit property.'
    }
  }

  revalidatePath('/property');
  redirect('/property');
}

export async function editPropertyStatus(id: number, active: boolean) {
  try {
    await db
      .update(property)
      .set({ is_active: active })
      .where(eq(property.id, id));

    revalidatePath('/property');
  }
  catch (error) {
    console.error("[property.ts] togglePropertyStatus - error:", error);
    throw new Error('Failed to toggle property status.')
  }
}