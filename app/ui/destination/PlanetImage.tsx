
import Image from 'next/image'
import React from 'react'

const PlanetImage = ({src}: {src: string}) => {
  return (
    <Image src={src} alt={src} width={384} height={384} />
  )
}

export default PlanetImage