import Link from 'next/link';
import React from 'react'

interface Props {
  label: string;
  href: string;
}

const ButtonAdd: React.FC<Props> = ({ label, href }) => {
  return (
    <Link href={href} className="btn btn-neutral h-fit min-h-min p-2 pr-3 rounded-2xl">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>

      {label}
    </Link>
  )
}

export default ButtonAdd