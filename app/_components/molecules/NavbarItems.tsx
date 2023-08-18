"use client";
import Link from "next/link";
import { useState } from "react";

const NavbarItems = () => {
  const [isActive, setIsActive] = useState(-1);
  const NavItems = [
    { text: "Beranda", href: "/" },
    { text: "Tentang", href: "/" },
    { text: "Program Kerja", href: "/" },
    { text: "Artikel", href: "/" },
  ];
  return (
    <ul className="px-4 py-2 flex gap-4">
      {NavItems.map((item, idx) => (
        <li key={idx}>
          <Link
            href={item.href}
            className={`${
              isActive === idx
                ? "text-primary-darker text-heading-s px-4 py-2  font-bold"
                : "text-primary-darker text-heading-s px-4 py-2 "
            }`}
            onClick={() => setIsActive(idx)}
          >
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default NavbarItems;
