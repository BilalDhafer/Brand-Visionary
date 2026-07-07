import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import FeatureStrip from './components/FeatureStrip.jsx'
import Projects from './components/Projects.jsx'
import Info from './components/Info.jsx'
import Clients from './components/Clients.jsx'
import Footer from './components/Footer.jsx'
import CursorDot from './components/CursorDot.jsx'

export default function App() {
  // subtle magnetic pull for outline buttons / back-to-top
  useEffect(() => {
    const buttons = document.querySelectorAll('.btn-outline, .to-top')

    const onMove = (e, btn) => {
      const r = btn.getBoundingClientRect()
      const x = e.clientX - r.left - r.width / 2
      const y = e.clientY - r.top - r.height / 2
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.35}px)`
    }
    const onLeave = (btn) => { btn.style.transform = 'translate(0,0)' }

    const handlers = []
    buttons.forEach((btn) => {
      const move = (e) => onMove(e, btn)
      const leave = () => onLeave(btn)
      btn.addEventListener('mousemove', move)
      btn.addEventListener('mouseleave', leave)
      handlers.push({ btn, move, leave })
    })

    return () => {
      handlers.forEach(({ btn, move, leave }) => {
        btn.removeEventListener('mousemove', move)
        btn.removeEventListener('mouseleave', leave)
      })
    }
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <FeatureStrip />
        <Projects />
        <Info />
        <Clients />
        <Footer />
      </main>
      <CursorDot />
    </>
  )
}
