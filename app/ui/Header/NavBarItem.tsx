import { barlowCondensed } from '@/app/lib/fonts'
import Link from 'next/link'
import React from 'react'

const NavBarItem = ({
    route,
    index,
    isactive = false,
    url
}: {
    route: string
    index: number,
    isactive?: boolean,
    url: string
}) => {
    const numberString = String(index + 1).padStart(2, '0')
    const hoverStyle = isactive ? 'border-opacity-100 border-white' : 'border-opacity-0 border-[#dadada]'
  return (
    <li key={index} className={`
    ${barlowCondensed.className} 
    tracking-widest uppercase text-white
    h-full border-b-4 
    ${hoverStyle}
    flex items-center
    hover:border-opacity-100
    transition-all duration-200
    ` }>
    <Link href={url} >
        <span className='font-bold mr-3'>{numberString}</span>
        {route}
    </Link>
</li>
  )
}

export default NavBarItem
