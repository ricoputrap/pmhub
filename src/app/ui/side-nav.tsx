import React from 'react'
import NavLinks from './nav-links'

const SideNav = () => {
  return (
    <div className='flex h-full flex-col w-56 bg-neutral'>
      <div className='w-full py-4'>
        <h1 className='text-secondary-content text-center text-2xl font-bold'>PMHub</h1>
      </div>
      
      <div className='p-2'>
        <NavLinks />
      </div>
    </div>
  )
}

export default SideNav