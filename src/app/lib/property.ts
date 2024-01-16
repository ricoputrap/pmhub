import db from '@/db';
import { property } from '@/db/schema';
import { eq, or, sql } from 'drizzle-orm';
import { PropertyTable } from './definitions';

export const ITEMS_PER_PAGE = 10;

export async function fetchProperties(query: string = '', page: number = 1): Promise<PropertyTable[]> {
  try {
    const offset = (page - 1) * ITEMS_PER_PAGE;
    const lowerCasedQuery = query.toLowerCase();

    const result: PropertyTable[] = await db.select({
      id: property.id,
      name: property.name,
      email: property.email,
      timezone: property.timezone,
      contact_number: property.contact_number,
      is_active: property.is_active
    })
      .from(property)
      .where(or(
        sql`lower(${property.name}) like '%' || ${lowerCasedQuery} || '%'`,
        sql`lower(${property.email}) like '%' || ${lowerCasedQuery} || '%'`,
        sql`lower(${property.timezone}) like '%' || ${lowerCasedQuery} || '%'`
      ))
      .limit(ITEMS_PER_PAGE)
      .offset(offset);

    return result;
  }
  catch (error) {
    console.error("[property.ts] fetchProperties - error:", error);
    throw new Error('Failed to fetch properties.')
  }
}

export async function getPropertyTotalPages(query: string = '') {
  try {
    const lowerCasedQuery = query.toLowerCase();

    const result = await db.select({
      count: sql<number>`count(*)`
    })
      .from(property)
      .where(or(
        sql`lower(${property.name}) like '%' || ${lowerCasedQuery} || '%'`,
        sql`lower(${property.email}) like '%' || ${lowerCasedQuery} || '%'`,
        sql`lower(${property.timezone}) like '%' || ${lowerCasedQuery} || '%'`
      ));

    return Math.ceil(Number(result[0].count) / ITEMS_PER_PAGE);
  }
  catch (error) {
    console.error("[property.ts] getPropertyTotalPages - error:", error);
    throw new Error('Failed to get the total pages in the Property table.')
  }
}

export async function getProperty(id: string) {
  try {
    return await db
      .select({
        id: property.id,
        name: property.name,
        email: property.email,
        timezone: property.timezone,
        contact_number: property.contact_number,
        is_active: property.is_active
      })
      .from(property)
      .where(eq(property.id, Number(id)));
  }
  catch (error) {
    console.error("[property.ts] getProperty - error:", error);
    throw new Error('Failed to fetch property.')
  }
}