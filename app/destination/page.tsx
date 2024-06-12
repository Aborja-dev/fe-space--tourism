import PlanetImage from '@/app/ui/destination/PlanetImage'
import PlanetInfo from '@/app/ui/destination/PlanetInfo'
import PlanetMenu from '@/app/ui/destination/PlanetMenu'
import { getDestinationByName } from '@/data/planets'
import React from 'react'

export default async function Page ({ searchParams }: 
  { searchParams: { planet: string} }) {
  const { planet } = searchParams
  const planetInfo = await getDestinationByName(planet);
  
  return (
    <>
      <div className='col-span-1 row-span-2 self-center'>
        <PlanetImage src={planetInfo.urlImage} />
      </div>
      <div className='col-span-1 px-12'>
        <PlanetMenu />
      </div>
      <div className='col-span-1'>
        <PlanetInfo {...planetInfo} /> 
      </div>

    </>
  )
}

