'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleHeaderCollapse = () => {
    if (window.scrollY > 50) {
      setIsCollapsed(true)
    } else {
      setIsCollapsed(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleHeaderCollapse)
    handleHeaderCollapse() // Initial check on page load
    
    return () => {
      window.removeEventListener('scroll', handleHeaderCollapse)
    }
  }, [])

  return (
    <header id="header" className={`${isCollapsed ? 'collapsed' : ''}`}>
      <Link href="/">
        <Image 
          src="/images/logo.png" 
          alt="Starfreut Logo" 
          className={`logo ${isCollapsed ? 'hidden' : ''}`} 
          id="logo" 
          width={300} 
          height={100}
          priority
        />
      </Link>
      <nav style={{ justifyContent: isCollapsed ? 'space-between' : 'center' }}>
        <Link href="/">
          <Image 
            src="/images/logoimg.png" 
            alt="Starfreut Logoimg" 
            className="small-logo" 
            id="small-logo" 
            width={50} 
            height={50}
            style={{ display: isCollapsed ? 'block' : 'none' }}
            priority
          />
        </Link>
        <ul>
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/#events">Events</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
          <li><Link href="/music">Music</Link></li>
          <li><Link href="/merch">Merch</Link></li>
        </ul>
      </nav>
    </header>
  )
} 