import { Suspense } from "react";

import { fetchProperties } from "@/app/lib/property";
import PropertyTable from "@/app/ui/property/table";

const TableSkeleton = () => (
  <div>Loading...</div>
)

export default async function Page() {
  await fetchProperties();

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1 className="text-2xl font-semibold">Property</h1>

        <button className="btn btn-primary h-fit min-h-min py-3">Add Property</button>
      </div>

      <div className='card bg-base-100 p-4 mt-4'>
        <Suspense fallback={<TableSkeleton />}>
          <PropertyTable />
        </Suspense>
      </div>
    </div>
  )
}