'use client'

import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

interface Props {
  direction: 'prev' | 'next'
  href: string
  isDisabled: boolean
}

const PaginationArrow: React.FC<Props> = ({ direction, href, isDisabled }) => {
  const className = clsx(
    'join-item btn btn-sm',
    { 'pointer-events-none text-gray-300': isDisabled },
  );

  if (isDisabled) {
    return (
      <div className={ className }>
        {direction === 'prev' ? 'Prev' : 'Next'}
      </div>
    )
  }

  return (
    <Link className={ className } href={href}>
      {direction === 'prev' ? 'Prev' : 'Next'}
    </Link>
  )
}

export default PaginationArrow