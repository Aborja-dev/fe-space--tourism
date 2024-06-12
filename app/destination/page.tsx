import { PLANETS } from '@/app/lib/constants'
import { barlowCondensed, bellefair } from '@/app/lib/fonts'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <>
     <section className='py-12 max-w-[1110px] mx-auto h-full'>
      <h2 className={`${barlowCondensed.className} text-hxs text-white uppercase tracking-widest mb-6`}>
        <span className='pr-6 text-[#666] font-bold'>01</span>
        pick your destination
      </h2>
      <div className='flex h-full justify-between'>
        <figure className='max-w-[500px] w-1/2 flex items-center'>
          <img src={PLANETS.MOON.src} alt="luna" />
        </figure>
        <article className='w-1/2 px-12 text-white space-y-12'>
          <nav>
            <ul className={`${barlowCondensed.className} flex space-x-8 text-light-blue text-nav tracking-widest uppercase`}>
              <Link href='/destination/moon'>
                <li className='pb-3 border-b-2 border-white border-opacity-0 hover:border-opacity-100 transition-all duration-200'>MOON</li>
              </Link>
             <li className='pb-3 border-b-2 border-white border-opacity-0 hover:border-opacity-100 transition-all duration-200'>mars</li>
             <li className='pb-3 border-b-2 border-white border-opacity-0 hover:border-opacity-100 transition-all duration-200'>jupiter</li>
             <li className='pb-3 border-b-2 border-white border-opacity-0 hover:border-opacity-100 transition-all duration-200'>mercury</li>
            </ul>
          </nav>
          <h2 className={`${bellefair.className} text-hl uppercase tracking-wider`}>Moon</h2>
          <p className='text-base text-light-blue'>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
          <div className='flex mt-12 border-t border-t-white border-opacity-40 pt-12'>
            <div className='w-1/2 space-y-3'>
              <p className='text-light-blue text-h uppercase tracking-wider '>AVG. DISTANCE</p>
              <h3 className={`${bellefair.className} uppercase text-shl`}>384,400 km</h3>
            </div>
            <div className='w-1/2 space-y-3'>
              <p className='text-light-blue text-h uppercase tracking-wider'>Est. travel time</p>
              <h3 className={`${bellefair.className} uppercase text-shl`}>3 days</h3>
            </div>
          </div>
        </article>
      </div>
     </section>
    </>
  )
}
export default Page
