'use client'

import { Destination, Route } from '@/app/lib/definitions'
import { barlowCondensed } from '@/app/lib/fonts'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

import React from 'react'
const routes: Route<Destination>[] = [
    {
        route: 'moon',
        url: '/destination/moon'
    },
    {
        route: 'mars',
        url: '/destination/mars'
    },
    {
        route: 'europa',
        url: '/destination/europa'
    },
    {
        route: 'titan',
        url: '/destination/titan'
    }
]

const PlanetMenu = () => {
    const { replace } = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const clickHandler = (planet: string) => { 
        const params = new URLSearchParams(searchParams)
        if (planet) {
            params.set('planet', planet)
        } else {
            params.delete('planet')
        }
        replace(`${pathname}?${params.toString()}`)
    }
    return (
        <nav>
            <ul className={` flex space-x-8 text-light-blue text-nav`}>
                {routes.map((route, index) => (
                    <MenuItem key={index} onClick={clickHandler} label={route.route} />
                ))}
            </ul>
        </nav>
    )
}

const MenuItem = ({ onClick, label }: { onClick: (planet: string) => void, label: string }) => {
    return (
        <button onClick={() => onClick(label)}>
            <li className= {`${barlowCondensed.className} tracking-widest uppercase pb-3 border-b-2 border-white border-opacity-0 hover:border-opacity-100 transition-all duration-200`}>
                {label}
            </li>
        </button>

    )
}

export default PlanetMenu
