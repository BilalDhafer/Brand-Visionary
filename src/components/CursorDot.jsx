import { useEffect, useRef } from 'react'

export default function CursorDot() {
  const dotRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    if (!dot) return

    const move = (e) => {
      dot.style.left = e.clientX + 'px'
      dot.style.top = e.clientY + 'px'
    }
    window.addEventListener('mousemove', move)

    const targets = document.querySelectorAll(
      'a, .btn-outline, .to-top, .project-card, .service'
    )
    const grow = () => dot.classList.add('grow')
    const shrink = () => dot.classList.remove('grow')
    targets.forEach((el) => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', grow)
        el.removeEventListener('mouseleave', shrink)
      })
    }
  }, [])

  return <div className="cursor-dot" ref={dotRef} />
}
