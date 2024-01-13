import React from 'react'

import { fetchProperties } from '@/app/lib/property';
import { PropertyTable } from '@/app/lib/definitions';

export default async function PropertyTable() {
  const properties: PropertyTable[] = await fetchProperties();

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
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
              <td className='text-center'>{index + 1}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.timezone}</td>
              <td className='text-center'>{row.is_active ? (
                <div className='badge badge-success'>Active</div>
              ) : (
                <div className='badge badge-warning'>Inactive</div>
              )}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}