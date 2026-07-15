import { useRef } from 'react'
import useReveal from '../hooks/useReveal.js'

const LOGOS = [
   '/logo.png',
  '/logo (2).png',
  '/logo (3).png',
  '/logo (4).png',
  '/logo.png',
  '/logo.png',
  '/logo.png',
    '/logo.png',
  '/logo.png',
  '/logo.png',
  '/logo.png',
  '/logo.png',
  '/logo.png',
  '/logo.png',
]

export default function Clients() {
  const [ref, visible] = useReveal()
  const marqueeRef = useRef(null)

  const pause = () => { if (marqueeRef.current) marqueeRef.current.style.animationPlayState = 'paused' }
  const resume = () => { if (marqueeRef.current) marqueeRef.current.style.animationPlayState = 'running' }

  const doubled = [...LOGOS, ...LOGOS]

  return (
    <section className="clients">
      <div ref={ref} className={`label reveal${visible ? ' in' : ''}`}>
        Clients
      </div>
      <div className="marquee" ref={marqueeRef} onMouseEnter={pause} onMouseLeave={resume}>
        {doubled.map((src, i) => (
          <img src={src} alt="client" key={i} />
        ))}
      </div>
    </section>
  )
}
