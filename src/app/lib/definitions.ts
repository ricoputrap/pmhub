export type Property = {
  id: string;
  name: string;
  email: string;
  timezone: string;
  contact_number: string;
  is_active: boolean;
}

export type PropertyTable = Pick<Property, 'id' | 'name' | 'email' | 'timezone' | 'is_active'>;

export interface NewProperty extends Property {
  password: string;
}

export enum EnumSearchParams {
  SEARCH = 'query',
  PAGE = 'page',
}

export type TableColumn = {
  key: string;
  label: string;
  isCentered?: boolean;
}