import db from '@/db';
import { property } from '@/db/schema';
import { and, sql } from 'drizzle-orm';
import { PropertyTable } from './definitions';

export const ITEMS_PER_PAGE = 2;

export async function fetchProperties(query: string = '', page: number = 1): Promise<PropertyTable[]> {
  try {
    const offset = (page - 1) * ITEMS_PER_PAGE;
    const lowerCasedQuery = query.toLowerCase();

    const result: PropertyTable[] = await db.select({
      id: property.id,
      name: property.name,
      email: property.email,
      timezone: property.timezone,
      is_active: property.is_active
    })
      .from(property)
      .where(and(
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
    // const filteredData = data.filter((property) => {
    //   if (!query) return true;

    //   const searchQuery = query.toLocaleLowerCase();
    //   if (property.name.toLowerCase().includes(searchQuery)) return true;
    //   if (property.email.toLowerCase().includes(searchQuery)) return true;
    //   if (property.timezone.toLocaleLowerCase().includes(searchQuery)) return true;

    //   return false;
    // });

    return 10;

    // return Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  }
  catch (error) {
    console.error("[property.ts] getPropertyTotalPages - error:", error);
    throw new Error('Failed to get the total pages in the Property table.')
  }
}