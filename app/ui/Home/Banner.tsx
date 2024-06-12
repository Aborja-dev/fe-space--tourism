import { bellefair } from '@/app/lib/fonts'
import HeroButton from '@/app/ui/Home/HeroButton'
import React from 'react'

const Banner = () => {
  return (
    <section className='max-w-[1110px] mx-auto h-full'>
        <div className='flex justify-between items-center h-full'>
            <article className='flex jusify-end flex-col space-y-6 text-white w-1/2'>
                <h2 className={`${bellefair.className} text-hxs font-bellefair text-light-blue`}>SO, YOU WANT TO TRAVEL TO</h2>
                <h1 className={`text-hxl ${bellefair.className}`}>SPACE</h1>
                <p className='text-base text-light-blue'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </article>
            <HeroButton />
        </div>
    </section>
  )
}

export default Banner
