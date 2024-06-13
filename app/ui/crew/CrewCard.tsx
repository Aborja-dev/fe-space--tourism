import { CrewMenber } from '@/app/lib/definitions'
import { bellefair } from '@/app/lib/fonts'
import React from 'react'

const CrewCard = ({bio, name, role}: Pick<CrewMenber, 'name' | 'role' | 'bio'>) => {
  return (
    <article className='space-y-5 flex flex-col h-full justify-center'>
      <h2 className={`${bellefair.className} antilising text-hs uppercase text-light-blue`}>{role}</h2>
      <h1 className={`${bellefair.className} text-hm text-white uppercase` }>{name}</h1>
      <p className='text-light-blue'>{bio}</p>
    </article>
  )
}

export default CrewCard
