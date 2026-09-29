"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/cn";

const linkStyles =
  "rounded text-shuttle-50 transition hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = mainNav.map((link) => {
    const active = link.href === pathname;
    return (
      <li key={link.label}>
        <Link
          href={link.href}
          aria-current={active ? "page" : undefined}
          onClick={() => setOpen(false)}
          className={cn(linkStyles, active ? "text-label-md font-medium" : "text-body-md")}
        >
          {link.label}
        </Link>
      </li>
    );
  });

  const actions = (
    <>
      <Link href="/login" className={cn(linkStyles, "text-body-md")}>
        Sign In
      </Link>
      <Link href="/signup" className={cn(linkStyles, "text-body-md")}>
        Join Us
      </Link>
    </>
  );

  return (
    <header className="relative z-30">
      <div className="mx-auto flex h-20 max-w-page items-center justify-between px-4 sm:px-6 md:h-[120px] xl:px-0">
        <Logo className="md:-mt-[13px]" />

        <nav aria-label="Main" className="absolute left-1/2 hidden -translate-x-1/2 md:block">
          <ul className="flex items-center gap-6">{navLinks}</ul>
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          {actions}
          <button type="button" aria-label="Shopping cart" className={linkStyles}>
            <Image src="/icons/shopping-bag.svg" alt="" width={24} height={24} />
          </button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
          className="flex size-10 items-center justify-center rounded-full text-shuttle-50 md:hidden"
        >
          <svg aria-hidden width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="absolute inset-x-4 top-full rounded-panel bg-brand/95 p-6 shadow-xl ring-1 ring-white/15 backdrop-blur md:hidden">
          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-4">{navLinks}</ul>
          </nav>
          <div className="mt-6 flex items-center gap-6 border-t border-white/15 pt-6">{actions}</div>
        </div>
      )}
    </header>
  );
}
