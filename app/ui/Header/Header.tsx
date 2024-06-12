'use client'
import { LOGO_SVG } from '@/app/lib/constants'
import NavBarItem from '@/app/ui/Header/NavBarItem'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'
type RoutesName = 'home' | 'destination' | 'crew' | 'technology'
type Route = { route: RoutesName, url: string }
const Header = () => {
  const routes: Route[] = [{
    route: 'home',
    url: '/'
  },
  {
    route: 'destination',
    url: '/destination'
  },
  {
    route: 'crew',
    url: '/crew'
  },
  {
    route: 'technology',
    url: '/technology'
  }
]
  const url = usePathname()
  const urlPage = url?.split('/')[1] || 'home'
  console.log(urlPage);
  
  return (
    <header className='w-full absolute top-[40px] bg-transparent h-20 flex items-center'>
      <div className='pl-16 relative w-1/2'>
        <Image src={LOGO_SVG} alt='logo' width={48} height={48} />
        <div className='w-[560px] h-[2px] bg-[#979797] z-50 absolute left-[266px] top-1/2'></div>
      </div>
      <nav className='h-full  w-1/2 pr-16' style={
        {
            backgroundColor: 'rgba(255, 255, 255, 0.42)',
            backdropFilter: 'blur(5px)',
        }
      }>
        <ul className='w-full h-full flex gap-12 justify-end items-center opacity-100 '>
            {
                routes.map((route, index) => (
                    <NavBarItem url={route.url} isactive={route.route === urlPage}  key={index} route={route.route} index={index} />
                ))
            }
        </ul>
      </nav>
    </header>
  )
}

export default Header
