import Link from 'next/link'
import React from 'react'
import Navigation from '../Navigation/Navigation'

const navItems = [
  {href: '/', title: 'Home'},
  {href: '/about', title: 'About'},
  {href: '/blog', title: 'Blog'},
]

const TheHeader = () => {
  return (
    <header>
      <Navigation navLinks={navItems} />
    </header>
  )
}

export default TheHeader