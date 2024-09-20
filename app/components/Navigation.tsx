import Link from 'next/link'
import React from 'react'
import AboutMe from './about-me'
import SideMenu from './side-menu'

const Navigation = () => {
  return (
    <div className='flex gap-4'>
      <AboutMe />
      <SideMenu/>
    </div>
  )
}

export default Navigation
