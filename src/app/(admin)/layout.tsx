import React from "react";
import SideNav from "@/app/ui/side-nav";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className='flex h-screen  bg-base-200'>
      <SideNav />

      <div className='flex-1'>
        <div className="navbar bg-base-100">
          <div className="avatar ml-auto">
            <div className="rounded-full">
              <Image
                src="/ahmed.jpeg"
                width={24}
                height={24}
                alt="profile"
              />
            </div>
          </div>
        </div>

        <div className='p-6'>
          {children}
        </div>
      </div>
    </div>
  )
}