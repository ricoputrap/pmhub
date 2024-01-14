import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const user = sqliteTable('USER', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  is_active: integer('is_active', { mode: 'boolean' }).default(true).notNull(),
  created_at: integer('created_at', { mode: 'timestamp_ms' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
  updated_at: integer('updated_at', { mode: 'timestamp_ms' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
});

export const property = sqliteTable("PROPERTY", {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  timezone: text('timezone').notNull(),
  contact_number: text('contact_number'),
  is_active: integer('is_active', { mode: 'boolean' }).default(true).notNull(),
  created_at: integer('created_at', { mode: 'timestamp_ms' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
  updated_at: integer('updated_at', { mode: 'timestamp_ms' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
});

export const subscriptionPlan = sqliteTable("SUBSCRIPTION_PLAN", {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull().unique(),
  price: integer('price').notNull(),
  is_active: integer('is_active', { mode: 'boolean' }).default(true).notNull(),
  created_at: integer('created_at', { mode: 'timestamp_ms' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
  updated_at: integer('updated_at', { mode: 'timestamp_ms' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
});

/**
 * a table that is created for storing data
 * from the many-to-many relation
 * between property & subscription plan
 */
export const subscription = sqliteTable("SUBSCRIPTION", {
  id: integer('id').primaryKey({ autoIncrement: true }),
  property_id: integer('property_id').notNull().references(() => property.id),
  plan_id: integer('plan_id').notNull().references(() => subscriptionPlan.id),
  start_date: integer('start_date', { mode: 'timestamp_ms' }).notNull(),
  end_date: integer('end_date', { mode: 'timestamp_ms' }).notNull(),
});

export type User = typeof user.$inferSelect;
export type Property = typeof property.$inferSelect;
export type SubscriptionPlan = typeof subscriptionPlan.$inferSelect;
export type Subscription = typeof subscription.$inferSelect;