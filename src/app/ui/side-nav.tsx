import React from 'react'
import Logout from './logout'
import NavLinks from './nav-links'

const SideNav = () => {
  return (
    <div className='flex min-h-screen flex-col w-56 bg-neutral gap-2 pb-2'>
      <div className='w-full py-4 border-b-[1px] border-b-base-content'>
        <h1 className='text-secondary-content text-center text-2xl font-bold'>PMHub</h1>
      </div>
      
      <div className='flex-1 p-2'>
        <NavLinks />
      </div>

      <div className='px-2'>
        <Logout />
      </div>
    </div>
  )
}

export default SideNav