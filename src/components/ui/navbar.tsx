import Link from 'next/link'
import React from 'react'

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100 px-10">
      <div className="flex-1">
        <Link href='/' className="btn btn-ghost text-xl">PMHub</Link>
      </div>

      <div className="flex-none h-full">
        <ul className='flex gap-3'>
          <Link href='/login' className='px-4'>
            <li>Login</li>
          </Link>
          <Link href='/register' className='px-4'>
            <li>Register</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar