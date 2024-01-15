import React from 'react'

import { fetchProperties, ITEMS_PER_PAGE } from '@/app/lib/property';
import { PropertyTable, TableColumn } from '@/app/lib/definitions';

export const PROPERTY_TABLE_COLUMNS: TableColumn[] = [
  { key: 'no', label: 'No', isCentered: true },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'timezone', label: 'Timezone' },
  { key: 'status', label: 'Status', isCentered: true },
]

interface Props {
  query: string;
  page: number;
}

export default async function PropertyTable({ query, page }: Props) {
  const properties: PropertyTable[] = await fetchProperties(query, page);

  return (
    <div className="overflow-x-auto min-h-[530px] flex flex-col">
      <table className="table">
        <thead>
          <tr className='bg-base-200'>
            <th className='text-center'>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Timezone</th>
            <th className='text-center'>Status</th>
          </tr>
        </thead>

        <tbody>
          {properties.map((row, index) => (
            <tr key={row.id}>
              <td className='text-center'>{index + 1 + ((page - 1) * ITEMS_PER_PAGE)}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.timezone}</td>
              <td className='text-center'>{row.is_active ? (
                <div className='badge badge-neutral badge-lg text-xs text-secondary-content'>Active</div>
              ) : (
                <div className='badge badge-accent badge-lg text-xs text-secondary-content'>Inactive</div>
              )}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {properties.length == 0 && (
        <div className='h-full flex-1 flex justify-center items-center'>
          NOT FOUND
        </div>
      )}
    </div>
  )
}