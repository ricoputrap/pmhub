export type Property = {
  id: string;
  name: string;
  email: string;
  timezone: string;
  contact_number: string;
  is_active: boolean;
}

export type PropertyTable = Pick<Property, 'id' | 'name' | 'email' | 'timezone' | 'is_active'>;

export enum EnumSearchParams {
  SEARCH = 'query',
  PAGE = 'page',
}