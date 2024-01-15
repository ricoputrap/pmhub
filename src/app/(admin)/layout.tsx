import React from "react";
import SideNav from "@/app/ui/side-nav";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <main className='flex h-screen'>
      <SideNav />

      <div className='flex-1'>
        <div className="navbar border-b-[1px]">
          <div className="avatar w-full navbar-end pr-3">
            <div className="rounded-full">
              <Image
                src="/ahmed.jpeg"
                width={28}
                height={28}
                alt="profile"
              />
            </div>
          </div>
        </div>

        <div className='p-4'>
          {children}
        </div>
      </div>
    </main>
  )
}