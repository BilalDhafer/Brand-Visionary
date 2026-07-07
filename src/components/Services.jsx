import useReveal from '../hooks/useReveal.js'

const SERVICES = [
  {
    title: 'Strategy',
    desc: 'We uncover your brand\'s purpose, define its positioning, and build a strategy that drives long-term growth.',
    tags: ['Positioning', 'growth', 'Alignment'],
  },
  {
    title: 'Identity',
    desc: 'We create distinctive visual identities that reflect your vision and leave a lasting impression.',
    tags: ['Typography', 'Visuality', 'Impression', 'Consistency'],
  },
  {
    title: 'Digital',
    desc: 'We design seamless digital experiences that strengthen your presence across every platform.',
    tags: ['Branding', 'Posters', 'Stationary'],
  },
]

export default function Services() {
  const [ref, visible] = useReveal()

  return (
    <section className="services wrap">
      <div ref={ref} className={`services-grid reveal-stagger${visible ? ' in' : ''}`}>
        {SERVICES.map((s) => (
          <div className="service" key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="tags">
              {s.tags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
