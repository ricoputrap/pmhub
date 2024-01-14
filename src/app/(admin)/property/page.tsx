import { Suspense } from "react";

import PropertyTable, { PROPERTY_TABLE_COLUMNS } from "@/app/ui/property/table";
import Search from "@/app/ui/search";
import Pagination from "@/app/ui/pagination";
import TableSkeleton from "@/app/ui/table-skeleton";
 

interface PageProps {
  searchParams?: {
    query?: string;
    page?: number;
  }
}

export default async function Page({ searchParams }: PageProps) {
  const query = searchParams?.query ?? '';
  const currentPage = searchParams?.page ?? 1;

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1 className="text-2xl font-semibold">Property</h1>
      </div>

      <div className='card bg-base-100 p-4 mt-4'>
        {/* search & add button */}
        <div className='mb-4 flex justify-between items-center'>
          <Search placeholder="Search property..." />

          <button className="btn btn-primary h-fit min-h-min py-2 px-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

            Add Property
          </button>
        </div>

        <Suspense fallback={<TableSkeleton columns={PROPERTY_TABLE_COLUMNS} />}>
          <PropertyTable query={query} page={currentPage} />
        </Suspense>

        {/* pagination */}
        <div className='mt-4 flex justify-center items-center'>
          <Pagination query={query} />
        </div>
      </div>
    </div>
  )
}