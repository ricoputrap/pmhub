import clsx from 'clsx';
import React from 'react'
import { TableColumn } from '@/app/lib/definitions';

interface Props {
  columns: TableColumn[];
}

const TableSkeleton: React.FC<Props> = ({ columns }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            {columns.map(({ key, label, isCentered }) => (
              <th
                key={key}
                className={clsx({ 'text-center': isCentered })}
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          <TableRowSkeleton totalColumns={columns.length} />
          <TableRowSkeleton totalColumns={columns.length} />
          <TableRowSkeleton totalColumns={columns.length} />
          <TableRowSkeleton totalColumns={columns.length} />
          <TableRowSkeleton totalColumns={columns.length} />
        </tbody>
      </table>
    </div>
  )
}

interface TableRowSkeletonProps {
  totalColumns: number;
}

const TableRowSkeleton: React.FC<TableRowSkeletonProps> = ({ totalColumns }) => (
  <tr>
    {Array.from({ length: totalColumns }).map((_, index) => (
      <td key={index}>
        <div className="skeleton h-6"></div>
      </td>
    ))}
  </tr>
)

export default TableSkeleton