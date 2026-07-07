import { useEffect, useState } from 'react'
import useClock from '../hooks/useClock.js'

export default function Nav() {
  const clock = useClock()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-left">
        <span className="dot" />
        <span>Baghdad</span>
        <span className="nav-clock">{clock}</span>
      </div>
      <div className="nav-name">
        <img src="/logo.png" alt="Logo" className="nav-logo" />
        <span>Brand Visionary</span>
      </div>
      <div className="nav-links">
        <a href="#top">Home</a>
        <a href="#work">Projects</a>
        <a href="#info">Info</a>
        <a href="mailto:bilal.dhafer@outlook.com">Send Email</a>
      </div>
      <div className="nav-toggle" aria-hidden="true">
        <span />
        <span />
      </div>
    </nav>
  )
}