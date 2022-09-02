import React from 'react'
import { socialProfile } from '../../data/socialProfile'

export function RightSideField() {
  return (
    <div className='hidden md:block fixed right-5 w-10 bottom-0' style={{ writingMode: 'vertical-rl' }}>
      <a href="mailto:letsworkhrs@gmail.com" className='font-mono hover:text-primary hover:pb-1 tracking-widest'>letsworkhrs@gmail.com</a>
      <span className='inline-block relative h-40 w-[1px] mt-5 bg-primary opacity-30' />
    </div>
  )
}
export function LeftSideField() {
  return (
    <div className='hidden md:block fixed left-5 text-center bottom-0'>
      <ul className='menu bg-base-100'>
        {
          socialProfile.map((data)=>(
            <li key={data.id} className='hover:text-primary'>
              <a href={data.link} target="_blank" rel="noopener noreferrer" className='tooltip tooltip-right hover:bg-transparent hover:-translate-y-1 focus:bg-transparent' data-tip={data.text}>
                {data.icon}
              </a>
            </li>
          ))
        }
      </ul>
      <span className='inline-block relative h-40 w-[1px] mt-5 bg-primary opacity-30' />
    </div>
  )
}
