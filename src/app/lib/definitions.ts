export type Property = {
  id: number;
  name: string;
  email: string;
  timezone: string;
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