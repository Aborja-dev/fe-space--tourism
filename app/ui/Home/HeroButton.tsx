import { bellefair } from '@/app/lib/fonts'
import Link from 'next/link'
import React from 'react'

const HeroButton = () => {
  return (
    <Link href='/destination'>
    <button className={`
      bg-white w-64 h-64 rounded-full
      hover:shadow-[0_0px_0px_70px_rgba(255,255,255,0.3)]
      transition-shadow duration-200
      `}>
      <p className={`${bellefair.className}  text-3xl text-dark-blue uppercase`} >Explore</p>
    </button>
    </Link>
  )
}
export default HeroButton
