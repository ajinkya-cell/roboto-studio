"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navItems = [
    { label: "Fireplaces", href: "/pages/fireplaces", anchor: "#fireplaces" },
    { label: "Lighting", href: "/pages/lighting", anchor: "#lighting" },
    { label: "Furniture", href: "/pages/furniture", anchor: "#furniture" },
    { label: "Journal", href: "/pages/journal", anchor: "#journal" },
  ];

  return (
    <nav 
      style={{
        WebkitTextStroke: "0.35px currentColor",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
      className="
        w-full
        px-4 sm:px-8 md:px-20
        py-6
        flex
        flex-row
        items-center 
        justify-between
        border-b
        border-gray-200
        bg-surface
        sticky
        top-0
        z-50
      "
    >
        <div>
           <Link href="/">
            <Image
                      width={108}
                      height={45}
                      src="/jamb.png"
                      alt="jamb logo"
                      
                    />
           </Link>
        </div>

    <div>
          <ul className="flex gap-6 sm:gap-10 md:gap-14 text-[#9C9C9D] text-[14px] sm:text-[15px] md:text-[16px] font-galaxie tracking-wide">

        {navItems.map((item) => {
          const href = isHome ? item.anchor : item.href;
          const isActive = pathname === item.href;

          return (
            <li key={item.label}>
              <Link
                href={href}
                className={`
                  relative
                  transition-colors duration-300
                  hover:text-black
                  ${
                    isActive
                      ? "text-black"
                      : ""
                  }
                `}
              >
                {item.label}

              
                <span
                  className={`
                    absolute left-0 -bottom-1
                    h-[1px] w-full bg-black
                    scale-x-0 origin-left
                    transition-transform duration-300
                    ${
                      isActive
                        ? "scale-x-100"
                        : "group-hover:scale-x-100"
                    }
                  `}
                />
              </Link>
            </li>
          );
        })}

      </ul>
    </div>
    </nav>
  );
}
