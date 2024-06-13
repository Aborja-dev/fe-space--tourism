'use client'
import { useURLRoute } from '@/app/lib/hooks/useURLRoute'
import React from 'react'

const CrewNavMenu = ({active}: {active: string}) => {
  const { setParams } = useURLRoute()
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    const data = new FormData(e.currentTarget)
    const value = data.get('crew')
    setParams(String(value), 'member')
  }
  const style = `w-[24px] h-[24px] hover:bg-[#979797] hover:cursor-pointer  rounded-full block`
  return (
    <form onChange={submitHandler}>
      <fieldset className='flex gap-12'>
      <div>
        <label htmlFor="Douglas" className={`${style} ${ active === '1' ? 'bg-white' : 'bg-[#444]' }`}></label>
        <input type="radio" name="crew" value="1" id="Douglas" className='hidden' />
      </div>              
      <div>
        <label htmlFor="Mark" className={`${style} ${ active === '2' ? 'bg-white' : 'bg-[#444]' }`}></label>
        <input type="radio" name="crew" value="2" id="Mark" className='hidden' />
      </div>              
      <div>
        <label htmlFor="Victor" className={`${style} ${ active === '3' ? 'bg-white' : 'bg-[#444]' }`}></label>
        <input type="radio" name="crew" value="3" id="Victor" className='hidden' />
      </div>              
      <div>
        <label htmlFor="Anousheh" className={`${style} ${ active === '4' ? 'bg-white' : 'bg-[#444]' }`}></label>
        <input type="radio" name="crew" value="4" id="Anousheh" className='hidden' />
      </div>              
      </fieldset>
    </form>
  )
}

export default CrewNavMenu
