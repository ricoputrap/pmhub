'use client'

import clsx from "clsx";
import Link from "next/link";

interface Props {
  page: number | string,
  href: string,
  isActive: boolean,
}

const PaginationNumber: React.FC<Props> = ({ page, href, isActive }) => {
  const className = clsx(
    'join-item btn btn-sm',
    { 'btn-active': isActive },
  );

  return (
    <Link className={ className } href={href}>
      {page}
    </Link>
  )
}

export default PaginationNumber