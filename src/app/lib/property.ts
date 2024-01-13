import { PropertyTable } from './definitions';

const data: PropertyTable[] = [
  {
    id: '101',
    name: 'Grand Plaza Hotel',
    email: 'grandplaza@email.com',
    timezone: 'Asia/Jakarta',
    is_active: true,
  },
  {
    id: '102',
    name: 'Cityscape Inn',
    email: 'cityscapeinn@email.com',
    timezone: 'Europe/London',
    is_active: false,
  },
  {
    id: '103',
    name: 'Metropolitan Suites',
    email: 'metropolitansuites@email.com',
    timezone: 'America/New_York',
    is_active: true,
  },
  {
    id: '104',
    name: 'Seaview Resort',
    email: 'seaviewresort@email.com',
    timezone: 'Australia/Sydney',
    is_active: false,
  },
  {
    id: '105',
    name: 'Skyline Towers Hotel',
    email: 'skylinetowers@email.com',
    timezone: 'Asia/Shanghai',
    is_active: true,
  },
  {
    id: '106',
    name: 'Nileview Apartments',
    email: 'nileview@email.com',
    timezone: 'Africa/Cairo',
    is_active: false,
  },
  {
    id: '107',
    name: 'Sunset Retreat',
    email: 'sunsetretreat@email.com',
    timezone: 'America/Los_Angeles',
    is_active: true,
  },
  {
    id: '108',
    name: 'Eiffel Tower Hotel',
    email: 'eiffeltower@email.com',
    timezone: 'Europe/Paris',
    is_active: false,
  },
  {
    id: '109',
    name: 'Tokyo Skyline Lodge',
    email: 'tokyoskyline@email.com',
    timezone: 'Asia/Tokyo',
    is_active: true,
  },
  {
    id: '110',
    name: 'Windy City Plaza',
    email: 'windycityplaza@email.com',
    timezone: 'America/Chicago',
    is_active: false,
  }
]

type FetchPropertyResponse = {
  data: PropertyTable[];
}

export async function fetchProperties(query: string = '', page: number = 1): Promise<PropertyTable[]> {
  try {
    return data;
  }
  catch (error) {
    console.error("[property.ts] fetchProperties - error:", error);
    throw new Error('Failed to fetch properties.')
  }
}