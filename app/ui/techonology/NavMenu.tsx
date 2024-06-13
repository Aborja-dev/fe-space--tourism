'use client'
import { bellefair } from '@/app/lib/fonts'
import { useURLRoute } from '@/app/lib/hooks/useURLRoute'
import NavMenuItem from '@/app/ui/techonology/NavMenuItem'
import React from 'react'

export const NavMenu = ({ active }: { active: string }) => {

  const { setParams } = useURLRoute()
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
    
    const data = new FormData(e.currentTarget)
    const value = data.get('terminology')
    setParams(String(value), 'terminology')
  }
  return (
    <form onChange={submitHandler}>
      <fieldset className='flex flex-col gap-12'>
        <NavMenuItem value='launch vehicle' active={active === 'launch vehicle'} label='1' />
        <NavMenuItem value='spaceport' active={active === 'spaceport'} label='2' />
        <NavMenuItem value='space capsule' active={active === 'space capsule'} label='3' />
      </fieldset>
    </form>
  )
}



export default NavMenu

