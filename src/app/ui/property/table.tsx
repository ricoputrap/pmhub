import React from 'react'

import { fetchProperties, ITEMS_PER_PAGE } from '@/app/lib/property';
import { PropertyTable, TableColumn } from '@/app/lib/definitions';
import Link from 'next/link';

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
            <th className='text-center'>Action</th>
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
              )}
              </td>

              <td>
                <div className='flex justify-center gap-2'>
                  <Link href={`/property/edit/${row.id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                  </Link>
                </div>
              </td>
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