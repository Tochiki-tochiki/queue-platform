"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive =
    mounted &&
    (pathname === href || (href !== "/" && pathname.startsWith(`${href}/`)));

  return (
    <Link
      href={href}
      className={`rounded-full px-4 py-2 transition ${
        isActive
          ? "bg-slate-950 text-white"
          : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900"
      }`}
    >
      {children}
    </Link>
  );
}