import React from 'react'
import { socialProfile } from '../../data/socialProfile'

export default function Footer() {
  return (
    <div className='text-center my-4'>
      <ul className='md:hidden menu justify-center flex-row bg-base-100'>
        {
          socialProfile.map((data)=>(
            <li key={data.id} className='hover:text-primary'>
              <a href={data.link} target="_blank" rel="noopener noreferrer" className='tooltip hover:bg-transparent hover:-translate-y-1' data-tip={data.text}>
                {data.icon}
              </a>
            </li>
          ))
        }
      </ul>
      <p>Built by Hardeepsinh Sodha</p>
    </div>
  )
}
