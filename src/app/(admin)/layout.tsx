import React from "react";
import SideNav from "@/app/ui/side-nav";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className='flex h-screen md:flex-row md:overflow-hidden'>
      <SideNav />

      <div className='flex-grow p-6'>
        {children}
      </div>
    </div>
  )
}