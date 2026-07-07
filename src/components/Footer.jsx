import useReveal from '../hooks/useReveal.js'

export default function Footer() {
  const [ref, visible] = useReveal()

  return (
    <footer className="wrap">
      <div ref={ref} className={`footer-top reveal${visible ? ' in' : ''}`}>
        <div>
          <div className="label" style={{ marginBottom: 22 }}>Collaborations</div>
          <div className="footer-head">
            Let's build
            <br />
            something
            <br />
            iconic.
          </div>
        </div>
        <div className="footer-links">
          <a href="mailto:bilal.dhafer@outlook.com">bilal.dhafer@outlook.com</a>
          <a href="https://www.linkedin.com/company/idvisionary/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://wa.me/9647806999861" target="_blank" rel="noreferrer">
            Contact
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-brand">
          <img src="/logo.png" alt="Logo" className="footer-logo" />
          © 2026 Brand Visionary. All rights reserved.
        </span>
        <a className="to-top" href="#top" aria-label="Back to top">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f2f1ed" strokeWidth="2">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </a>
      </div>
    </footer>
  )
}