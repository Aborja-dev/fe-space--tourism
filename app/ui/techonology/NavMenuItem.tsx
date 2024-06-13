import { bellefair } from '@/app/lib/fonts'
import React from 'react'

const NavMenuItem = ({ active, label, value }: { active: boolean, label: string, value: string}) => {
    const style = `w-[80px] h-[80px] grid place-items-center border hover:bg-[#fff] hover:cursor-pointer rounded-full block group`
    const styleActive = active  ? 'bg-white' : 'bg-transparent border border-light-blue'
    return (
      <div>
        <label htmlFor={value} className={`${style} ${styleActive}`}>
          <p className={`${bellefair.className} ${active ? 'text-dark-blue' : 'text-light-blue'  } text-hs uppercase  group-hover:text-dark-blue`}>{label}</p>
        </label>
        <input type="radio" name="terminology" value={value} id={value} className='hidden' />
      </div>
    )
  }

export default NavMenuItem
