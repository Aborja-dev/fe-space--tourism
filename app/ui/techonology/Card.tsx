import { Technology } from '@/app/lib/definitions'
import { bellefair } from '@/app/lib/fonts'
import React from 'react'

const Card = ({description, title}: Pick<Technology, 'title' | 'description'>) => {
  return (
    <article className='space-y-5 flex flex-col h-full justify-center'>
    <h2 className={`${bellefair.className} antilising text-hs uppercase text-light-blue`}>The terminology...</h2>
    <h1 className={`${bellefair.className} text-hm text-white uppercase` }>{title}</h1>
    <p className='text-light-blue'>{description}</p>
  </article>
  )
}

export default Card
