import { Planet } from '@/app/lib/definitions'
import { bellefair } from '@/app/lib/fonts'
import React from 'react'

const PlanetInfo = ({ description, distance, travel, name }: Pick<Planet, 'name' | 'description' | 'distance' | 'travel'>) => {
  return (
    <div className='px-12 text-white space-y-12'>
      <h2 className={`${bellefair.className} text-hl uppercase tracking-wider`}>{name}</h2>
      <p className='text-base text-light-blue'>{description}</p>
      <div className='flex mt-12 border-t border-t-white border-opacity-40 pt-12'>
        <div className='w-1/2 space-y-3'>
          <p className='text-light-blue text-h uppercase tracking-wider '>AVG. DISTANCE</p>
          <h3 className={`${bellefair.className} uppercase text-shl`}>{distance}</h3>
        </div>
        <div className='w-1/2 space-y-3'>
          <p className='text-light-blue text-h uppercase tracking-wider'>Est. travel time</p>
          <h3 className={`${bellefair.className} uppercase text-shl`}>{travel}</h3>
        </div>
      </div>
    </div>
  )
}

export default PlanetInfo
