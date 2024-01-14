import { PropertyTable } from './definitions';

const ITEMS_PER_PAGE = 10;
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
  },
  {
    id: '111',
    name: 'Golden Oasis Resort',
    email: 'goldenoasis@email.com',
    timezone: 'Asia/Dubai',
    is_active: true,
  },
  {
    id: '112',
    name: 'Alpine Peaks Lodge',
    email: 'alpinepeaks@email.com',
    timezone: 'Europe/Zurich',
    is_active: false,
  },
  {
    id: '113',
    name: 'Pacific Waves Hotel',
    email: 'pacificwaves@email.com',
    timezone: 'America/Los_Angeles',
    is_active: true,
  },
  {
    id: '114',
    name: 'Mystic Valley Inn',
    email: 'mysticvalleyinn@email.com',
    timezone: 'Australia/Sydney',
    is_active: false,
  },
  {
    id: '115',
    name: 'City Lights Plaza',
    email: 'citylightsplaza@email.com',
    timezone: 'Asia/Taipei',
    is_active: true,
  },
  {
    id: '116',
    name: 'Sahara Sands Resort',
    email: 'saharasands@email.com',
    timezone: 'Africa/Cairo',
    is_active: false,
  },
  {
    id: '117',
    name: 'Rocky Mountain Lodge',
    email: 'rockymountain@email.com',
    timezone: 'America/Denver',
    is_active: true,
  },
  {
    id: '118',
    name: 'Venice Canal Suites',
    email: 'venicecanal@email.com',
    timezone: 'Europe/Rome',
    is_active: false,
  },
  {
    id: '119',
    name: 'Cherry Blossom Retreat',
    email: 'cherryblossom@email.com',
    timezone: 'Asia/Tokyo',
    is_active: true,
  },
  {
    id: '120',
    name: 'Cascading Falls Hotel',
    email: 'cascadingfalls@email.com',
    timezone: 'America/New_York',
    is_active: false,
  },
  {
    id: '121',
    name: 'Aurora Borealis Resort',
    email: 'auroraborealis@email.com',
    timezone: 'America/Anchorage',
    is_active: true,
  },
  {
    id: '122',
    name: 'Harbor Lights Inn',
    email: 'harborlights@email.com',
    timezone: 'America/Detroit',
    is_active: false,
  },
  {
    id: '123',
    name: 'Serenity Valley Retreat',
    email: 'serenityvalley@email.com',
    timezone: 'Asia/Kolkata',
    is_active: true,
  },
  {
    id: '124',
    name: 'Royal Garden Hotel',
    email: 'royalgarden@email.com',
    timezone: 'Europe/London',
    is_active: false,
  },
  {
    id: '125',
    name: 'Coral Reef Resort',
    email: 'coralreef@email.com',
    timezone: 'Pacific/Honolulu',
    is_active: true,
  },
  {
    id: '126',
    name: 'Majestic Mountain Lodge',
    email: 'majesticmountain@email.com',
    timezone: 'America/Denver',
    is_active: false,
  },
  {
    id: '127',
    name: 'Tranquil Bay Suites',
    email: 'tranquilbay@email.com',
    timezone: 'Asia/Singapore',
    is_active: true,
  },
  {
    id: '128',
    name: 'Tropical Oasis Resort',
    email: 'tropicaloasis@email.com',
    timezone: 'America/Puerto_Rico',
    is_active: false,
  },
  {
    id: '129',
    name: 'Lakeside Retreat Hotel',
    email: 'lakesideretreat@email.com',
    timezone: 'Europe/Berlin',
    is_active: true,
  },
  {
    id: '130',
    name: 'Sunflower Fields Inn',
    email: 'sunflowerfields@email.com',
    timezone: 'Asia/Shanghai',
    is_active: false,
  },
  {
    id: '131',
    name: 'Alps View Lodge',
    email: 'alpsview@email.com',
    timezone: 'Europe/Zurich',
    is_active: true,
  },
  {
    id: '132',
    name: 'Golden Gate Hotel',
    email: 'goldengate@email.com',
    timezone: 'America/Los_Angeles',
    is_active: false,
  },
  {
    id: '133',
    name: 'Emerald City Suites',
    email: 'emeraldcity@email.com',
    timezone: 'America/Chicago',
    is_active: true,
  },
  {
    id: '134',
    name: 'Palm Oasis Resort',
    email: 'palmoasis@email.com',
    timezone: 'Asia/Dubai',
    is_active: false,
  },
  {
    id: '135',
    name: 'Castle View Inn',
    email: 'castleview@email.com',
    timezone: 'Europe/Paris',
    is_active: true,
  },
  {
    id: '136',
    name: 'Mystic Moon Hotel',
    email: 'mysticmoon@email.com',
    timezone: 'Pacific/Auckland',
    is_active: false,
  },
  {
    id: '137',
    name: 'Whispering Pines Lodge',
    email: 'whisperingpines@email.com',
    timezone: 'America/Denver',
    is_active: true,
  },
  {
    id: '138',
    name: 'City Lights Suites',
    email: 'citylights@email.com',
    timezone: 'Asia/Kolkata',
    is_active: false,
  },
  {
    id: '139',
    name: 'Harmony Haven Resort',
    email: 'harmonyhaven@email.com',
    timezone: 'Africa/Johannesburg',
    is_active: true,
  },
  {
    id: '140',
    name: 'Mountain View Retreat',
    email: 'mountainview@email.com',
    timezone: 'America/Phoenix',
    is_active: false,
  },
  {
    id: '141',
    name: 'Ocean Breeze Hotel',
    email: 'oceanbreeze@email.com',
    timezone: 'Australia/Sydney',
    is_active: true,
  },
  {
    id: '142',
    name: 'Starlight Suites',
    email: 'starlightsuites@email.com',
    timezone: 'Asia/Tokyo',
    is_active: false,
  },
  {
    id: '143',
    name: 'Urban Oasis Inn',
    email: 'urbanoasis@email.com',
    timezone: 'America/New_York',
    is_active: true,
  },
  {
    id: '144',
    name: 'Snowy Peaks Lodge',
    email: 'snowypeaks@email.com',
    timezone: 'Europe/Berlin',
    is_active: false,
  },
  {
    id: '145',
    name: 'Tropical Haven Resort',
    email: 'tropicalhaven@email.com',
    timezone: 'America/Los_Angeles',
    is_active: true,
  },
  {
    id: '146',
    name: 'Golden Sands Hotel',
    email: 'goldensands@email.com',
    timezone: 'Asia/Dubai',
    is_active: false,
  },
  {
    id: '147',
    name: 'Enchanted Forest Retreat',
    email: 'enchantedforest@email.com',
    timezone: 'Europe/Paris',
    is_active: true,
  },
  {
    id: '148',
    name: 'Mountain Majesty Inn',
    email: 'mountainmajesty@email.com',
    timezone: 'America/Denver',
    is_active: false,
  },
  {
    id: '149',
    name: 'Seaside Serenity Hotel',
    email: 'seasideserenity@email.com',
    timezone: 'Asia/Shanghai',
    is_active: true,
  },
  {
    id: '150',
    name: 'Countryside Cottage Lodge',
    email: 'countrysidecottage@email.com',
    timezone: 'Europe/London',
    is_active: false,
  }
]

type FetchPropertyResponse = {
  data: PropertyTable[];
}

export async function fetchProperties(query: string = '', page: number = 1): Promise<PropertyTable[]> {
  try {
    return data
      .filter((property) => {
        if (!query) return true;

        const searchQuery = query.toLocaleLowerCase();
        if (property.name.toLowerCase().includes(searchQuery)) return true;
        if (property.email.toLowerCase().includes(searchQuery)) return true;
        if (property.timezone.toLocaleLowerCase().includes(searchQuery)) return true;

        return false;
      })
      .slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
  }
  catch (error) {
    console.error("[property.ts] fetchProperties - error:", error);
    throw new Error('Failed to fetch properties.')
  }
}

export async function getPropertyTotalPages(query: string = '') {
  try {
    const filteredData = data.filter((property) => {
      if (!query) return true;

      const searchQuery = query.toLocaleLowerCase();
      if (property.name.toLowerCase().includes(searchQuery)) return true;
      if (property.email.toLowerCase().includes(searchQuery)) return true;
      if (property.timezone.toLocaleLowerCase().includes(searchQuery)) return true;

      return false;
    });

    return Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  }
  catch (error) {
    console.error("[property.ts] getPropertyTotalPages - error:", error);
    throw new Error('Failed to get the total pages in the Property table.')
  }
}