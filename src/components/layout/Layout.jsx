import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {RightSideField, LeftSideField} from './SideField'

export default function Layout(props) {
  return (
    <div className='container mx-auto px-4'>
        <Header/>
        <RightSideField />
        <LeftSideField />
        <div className='px-4 sm:px-20'>
            {props.children}
        </div>
        <Footer/>
    </div>
  )
}
