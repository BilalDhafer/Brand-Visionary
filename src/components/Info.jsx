import useReveal from '../hooks/useReveal.js'

export default function Info() {
  const [introRef, introVisible] = useReveal()
  const [founderRef, founderVisible] = useReveal()

  return (
    <section className="info wrap" id="info">
      <div className={`label reveal${introVisible ? ' in' : ''}`} ref={introRef}>
        Info
      </div>
      <p className={`info-intro reveal${introVisible ? ' in' : ''}`}>
        We help businesses, entrepreneurs, and brands build a powerful identity through strategic thinking, logo design, and complete visual identity systems. Every brand we create is designed to stand out, inspire trust, and leave a lasting impression.
      </p>

      <div ref={founderRef} className={`founder reveal${founderVisible ? ' in' : ''}`}>
        <img
          src="/Bilal-d-Saleh.png"
          alt="Bilal D Saleh"
          className="founder-img"
        />
        <div className="founder-text">
          <div className="founder-label">Meet the Founder</div>
          <h3>Bilal D Saleh</h3>
          <div className="founder-role">Co-Founder</div>
          <p className="founder-quote">
            I believe every great business deserves a brand with purpose, clarity, and lasting impact.
          </p>
          <div className="founder-links">
            <a href="https://www.linkedin.com/in/bilal-d-saleh/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/bilal.visionary/" target="_blank" rel="noreferrer">
              Instagram
            </a>
              <a href="https://drive.google.com/file/d/17hKxdkuCZAU7xQfwCSQ6ql3nfyEb5kVf/view?usp=sharing" target="_blank" rel="noreferrer">
    View CV
  </a>
          </div>
        </div>
      </div>
    </section>
  )
}