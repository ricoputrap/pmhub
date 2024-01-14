'use client';

import { usePathname, useSearchParams } from "next/navigation";
import { EnumSearchParams } from "@/app/lib/definitions";
import { generatePagination } from "../lib/utils";
import PaginationArrow from "./pagination-arrow";
import PaginationNumber from "./pagination-number";

interface Props {
  totalPages: number;
}

export default function Pagination({ totalPages }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get(EnumSearchParams.PAGE) ?? 1);
  const allPages = generatePagination(currentPage, totalPages);

  const createPageURL = (page: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set(EnumSearchParams.PAGE, page.toString());

    return `${pathname}?${params.toString()}`;
  }

  return (
    <div className="join">
      <PaginationArrow
        direction="prev"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage === 1}
      />

      {allPages.map((page, index) => (
        <PaginationNumber
          key={index}
          page={page}
          href={createPageURL(page)}
          isActive={page === currentPage}
        />
      ))}

      <PaginationArrow
        direction="next"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage === totalPages}
      />
    </div>
  )
}