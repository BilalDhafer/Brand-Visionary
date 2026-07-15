import { useState } from 'react'
import useReveal from '../hooks/useReveal.js'
import Modal from './Modal.jsx'

const PROJECTS = [
  {
  name: 'Best Fit Co.',
  desc: 'Built a complete brand identity for Best Fit, an HR services company — including logo design, color palette, custom pattern, and typography.',
  images: [
    '/project1-1.png',
    '/project1-2.png',
    '/project1-3.png',
    '/project1-4.png',
    '/project1-5.png',
  ],
},
  {
    name: 'Qafza',
    desc: 'Building a brand from the ground up. I developed the visual DNA for Qafza.',
    images: [
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80',
    ],
  },
]

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  )
}

export default function Projects() {
  const [headRef, headVisible] = useReveal()
  const [gridRef, gridVisible] = useReveal()
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section className="projects wrap" id="work">
      <div ref={headRef} className={`section-head reveal${headVisible ? ' in' : ''}`}>
        <div>
          <div className="label">Projects</div>
          <h2>Some of my recent work</h2>
        </div>
        <div className="years">We are looking to creat more you looking for</div>
      </div>

      <div ref={gridRef} className={`project-grid reveal-stagger${gridVisible ? ' in' : ''}`}>
        {PROJECTS.map((p) => (
          <div
            className="project-card"
            key={p.name}
            onClick={() => setActiveProject(p)}
            style={{ cursor: 'pointer' }}
          >
            <img src={p.images[0]} alt={p.name} />
            <div className="project-info">
              <div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
              </div>
              <div className="project-arrow">
                <ArrowIcon />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}