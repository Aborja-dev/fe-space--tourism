import Card from '@/app/ui/techonology/Card'
import NavMenu from '@/app/ui/techonology/NavMenu'
import { getConceptByName } from '@/data/planets'
import Image from 'next/image'
import React from 'react'

export default async function Page({ searchParams }: { searchParams: { terminology: string } }) {
  const { terminology } = searchParams
  const concept = await getConceptByName(terminology)
  return (
    <>
      <div className='grid grid-cols-12'>
        <div className='col-span-1 place-self-center justify-self-start'>
          <NavMenu active={terminology} />
        </div>
        <div className='col-span-5'>
          <Card {...concept} />
        </div>
        <div className='col-span-6'>
          <Image src={concept.image} alt={concept.title} width={1920} height={1080} />
        </div>
      </div>
    </>
  )
}
