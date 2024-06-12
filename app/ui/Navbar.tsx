import { LOGO_SVG } from '@/app/lib/constants'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  const routes = ['home', 'destination', 'crew', 'technology']
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
        <ul className='w-full h-full flex gap-12 justify-end items-center tracking-wider text-white opacity-100 font-barlow-condensed uppercase'>
            {
                routes.map((route, index) => (
                    <li key={index}>
                        <a href="#">
                            <span className='font-bold mr-3'>0{index + 1}</span>
                            {route}
                        </a>
                    </li>
                ))
            }
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
