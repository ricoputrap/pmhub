import { Property } from "@/db/schema";

export type PropertyTable = Pick<
  Property,
  'id' | 'name' | 'email' | 'timezone' | 'contact_number' | 'is_active'
>;

export type EditProperty = Partial<Omit<Property, 'id' | 'created_at' | 'updated_at' | 'is_active' >>

export enum EnumSearchParams {
  SEARCH = 'query',
  PAGE = 'page',
}

export type TableColumn = {
  key: string;
  label: string;
  isCentered?: boolean;
}