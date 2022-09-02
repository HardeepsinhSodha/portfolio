import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../asset/logo/logo_light.png'
import { Menu } from 'react-feather'
import { Dropdown } from 'react-daisyui'
export default function Header() {
  return (
    <div className="navbar container mx-auto bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="logo" width='48px' height='48px'/>
          </Link>
        </div>
        <div className="hidden sm:inline">
            <ul className="menu menu-horizontal p-0">
                <li><a className='' href='/#about'><span className='text-primary'>01.</span>About</a></li>
                <li><a href='/#experience'><span className='text-primary'>02.</span>Experience</a></li>
                <li><a href='/#work'><span className='text-primary'>03.</span>Work</a></li>
                <li><a href='/#contact'><span className='text-primary'>04.</span>Contact</a></li>
            </ul>
            <a target='_blank' href='https://drive.google.com/file/d/1YYspIAy6ryqvjLhfM61GNEnIDjZYHpUO/view?usp=sharing' className='btn btn-outline btn-primary' rel="noreferrer">Resume</a>
        </div>
        <div className='flex-none sm:hidden'>
          <Dropdown vertical="end" className='sm:hidden ' >
            <button className='btn btn-square btn-link'>
              <Menu />
            </button>
            <Dropdown.Menu className="w-40 menu-compact bg-slate-800">
              <Dropdown.Item href='/#about' className='text-lg'>About</Dropdown.Item>
              <Dropdown.Item href='/#experience' className='text-lg'>Experience</Dropdown.Item>
              <Dropdown.Item href='/#work' className='text-lg'>Work</Dropdown.Item>
              <Dropdown.Item href='/#contact' className='text-lg'>Contact</Dropdown.Item>
              <Dropdown.Item href='https://drive.google.com/file/d/1YYspIAy6ryqvjLhfM61GNEnIDjZYHpUO/view?usp=sharing' className='text-lg'>Resume</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
    </div>
  )
}
