'use client'

import { usePathname } from 'next/navigation'

import React from 'react'
import Link from 'next/link'

interface Item {
    title: string,
    href: string,
}

export default function Navigation({items}: {items: Item[]}) {
const pathname = usePathname();
  return (
    <nav>
      <ul className='flex gap-4 p-4 bg-black'>
        {items.map((item, index) => <li key={index}>
            <Link className={`${pathname === item.href ? "text-blue-400 border-b-" : "text-white"} `} href={item.href}>{item.title}</Link>
        </li>)}
      </ul>
    </nav>
  )
}
