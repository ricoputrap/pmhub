import { Suspense } from "react";

import PropertyTable from "@/app/ui/property/table";
import Search from "@/app/ui/search";

const TableSkeleton = () => (
  <div>Loading...</div>
)

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

        <button className="btn btn-primary h-fit min-h-min py-3">Add Property</button>
      </div>

      <div className='card bg-base-100 p-4 mt-4'>

        {/* search bar */}
        <Search placeholder="Search property..." />

        <Suspense fallback={<TableSkeleton />}>
          <PropertyTable query={query} page={currentPage} />
        </Suspense>
      </div>
    </div>
  )
}