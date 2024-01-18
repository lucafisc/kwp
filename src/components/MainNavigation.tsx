"use client"
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type LinkTarget = {
  text: string;
  url: string;
};

const linkTargets: LinkTarget[] = [
  {
    text: "Films",
    url: "/films",
  },
  {
    text: "Press",
    url: "/press",
  },
  {
    text: "About",
    url: "/about",
  },
];

export default function MainNavigation() {
  const pathname = usePathname();

  return <ul className="md:text-right">{getMenuItems(pathname)}</ul>;
}

function getMenuItems(pathname: string): ReactNode {
  return linkTargets.map(({ text, url }) => {
    const currentLink = url === pathname;
    return (
      <li key={url} className={`${currentLink ? 'font-bold' : 'font-normal'} text-2xl hover:font-bold active:text-accent transition-all active:font-bold cursor-pointer`}>
        <Link href={url}>{text}</Link>
      </li>
    );
  });
}
