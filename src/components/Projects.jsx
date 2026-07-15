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
    name: 'Ali Ihsan Photography',
    desc: 'Stunning Arabic Calligraphy Logo with a Professional Business Card Design',
    images: [
      '/project2-1.png',
    '/project2-2.png',
    '/project2-3.png',
    '/project2-4.png',
    ],
  },
     {
    name: 'UR Legal Solutions',
    desc: 'Stunning Mascot Logo for UR Legal Solutions company',
    images: [
      '/project3-1.png',
    '/project3-2.png',
    '/project3-3.png',
    ],
  },
     {
    name: 'EMPT',
    desc: 'EMPT',
    images: [
      '/project4-1.png',
    '/project4-2.png',
    '/project4-3.png',
    '/project4-4.png',
    ],
  },
     {
    name: 'EMPT',
    desc: 'EMPT',
    images: [
      '/project5-1.png',
    '/project5-2.png',
    '/project5-3.png',
    '/project5-4.png',
    ],
  },
     {
    name: 'EMPT',
    desc: 'EMPT',
    images: [
      '/project6-1.png',
    '/project6-2.png',
    '/project6-3.png',
    '/project6-4.png',
    ],
  },
     {
    name: 'EMPT',
    desc: 'EMPT',
    images: [
      '/project7-1.png',
    '/project7-2.png',
    '/project7-3.png',
    '/project7-4.png',
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
          <h2>Some of Our work</h2>
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