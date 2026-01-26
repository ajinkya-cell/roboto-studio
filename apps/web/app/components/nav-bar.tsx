"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Fireplaces", href: "/pages/fireplaces" },
    { label: "Lighting", href: "/pages/lighting" },
    { label: "Furniture", href: "/pages/furniture" },
    { label: "Journal", href: "/pages/journal" },
  ];

  return (
    <>
      <nav className="bg-surface px-10 h-20 w-full flex items-center justify-between border-b border-gray-200 relative z-[9997]">

        <div>
          <Link href="/">
            <Image
              width={108}
              height={45}
              src="/jamb.png"
              alt="jamb logo"
              className="cursor-pointer"
            />
          </Link>
        </div>

        <div className="flex items-center  gap-6">
          <Image className="cursor-pointer" src="/search.png" alt="Search" width={22} height={22} />
         <Link href="/pages/about">
          <Image  className="cursor-pointer" src="/message.png" alt="Messages" width={22} height={22} />
         </Link>

          <button onClick={() => setOpen(true)} aria-label="Open menu">
            <Image  className="cursor-pointer" src="/folder.png" alt="Menu" width={22} height={22} />
          </button>
        </div>
      </nav>

     
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9999]"
        />
      )}

    
      <div
        className={`
          fixed top-[90px] right-10 w-[260px]
          bg-[#F6F3EF]
          shadow-2xl border border-gray-200
          z-[9999]
          transition-all duration-300 ease-out
          ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
        `}
      >
        <ul className="flex flex-col divide-y divide-gray-200">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                  block px-6 py-4
                  font-galaxie text-[16px]
                  text-[#9C9C9D]
                  transition-colors duration-300
                  hover:text-black hover:bg-white/40
                "
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
