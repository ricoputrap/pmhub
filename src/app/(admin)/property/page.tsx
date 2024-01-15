import { Suspense } from "react";

import PropertyTable, { PROPERTY_TABLE_COLUMNS } from "@/app/ui/property/table";
import Search from "@/app/ui/search";
import Pagination from "@/app/ui/pagination";
import TableSkeleton from "@/app/ui/table-skeleton";
import { getPropertyTotalPages } from "@/app/lib/property";
import ButtonAdd from "@/app/ui/btn-add";
 

interface PageProps {
  searchParams?: {
    query?: string;
    page?: number;
  }
}

export default async function Page({ searchParams }: PageProps) {
  const query = searchParams?.query ?? '';
  const currentPage = searchParams?.page ?? 1;

  const totalPages = await getPropertyTotalPages(query);

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1 className="text-2xl font-semibold">Property</h1>
      </div>

      <div className='bg-base-100 mt-5'>
        {/* search & add button */}
        <div className='mb-5 flex justify-between items-center'>
          <Search placeholder="Search property..." />

          <ButtonAdd
            label='Add Property'
            href='/property/add'
          />
        </div>

        {/* data table */}
        <Suspense fallback={<TableSkeleton columns={PROPERTY_TABLE_COLUMNS} />}>
          <PropertyTable query={query} page={currentPage} />
        </Suspense>

        {/* pagination */}
        <div className='mt-4 flex justify-center items-center'>
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </div>
  )
}