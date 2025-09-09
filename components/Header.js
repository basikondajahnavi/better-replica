import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 30px' }}>
        
        {/* Logo */}
        <div className="logo" style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#06d6a0' }}>
          <Link href="/">Better<span style={{ color: '#ffd166' }}>.</span></Link>
        </div>

        {/* Hamburger (mobile only) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          style={{ display: 'none', fontSize: '1.5rem', background: 'none', border: 'none', color: '#fff' }}
          className="menu-btn"
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        {/* Navigation */}
        <nav className={`nav ${isOpen ? 'open' : ''}`} aria-label="Main navigation" style={{ display: 'flex', gap: '20px', fontSize: '1.1rem' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>Home</Link>
          <Link href="/about-us" style={{ textDecoration: 'none' }}>About Us</Link>
          <Link href="/mortgage-calculator" style={{ textDecoration: 'none' }}>Calculator</Link>
          <Link href="/start" style={{ textDecoration: 'none' }}>Start</Link>
        </nav>
      </div>
    </header>
  )
}
