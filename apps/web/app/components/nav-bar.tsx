import Image from 'next/image'
import React from 'react'

export const Navbar = () => {
  return (
    <nav className='bg-surface px-10 h-20 w-full flex items-center justify-between'>
      <div>
        <Image
          width={108}
          height={45}
          src="/jamb.png"
          alt="jamb logo"
          
        />
      </div>
      <div className='flex items-center gap-6'>
        <Image
          src="/search.png"
          alt="Search"
          width={22}
          height={22}
          className="cursor-pointer"
        />

          <Image
          src="/message.png"
          alt="Messages"
          width={22}
          height={22}
          className="cursor-pointer"
        />

        <Image
          src="/folder.png"
          alt="Folder"
          width={22}
          height={22}
          className="cursor-pointer"
        />

      </div>
    </nav>
  );
}
