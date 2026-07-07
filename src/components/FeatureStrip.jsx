import { useEffect, useRef } from 'react'

export default function FeatureStrip() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const img = imgRef.current
    if (!section || !img) return

    let ticking = false

    const updateOpacity = () => {
      const rect = section.getBoundingClientRect()
      const vh = window.innerHeight

      // مركز العنصر داخل الشاشة
      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = vh / 2

      // كل ما بعُد مركز العنصر عن مركز الشاشة، تقل الشفافية
      const distance = Math.abs(elementCenter - viewportCenter)
      const maxDistance = vh / 2 + rect.height / 2

      let opacity = 1 - distance / maxDistance
      opacity = Math.max(0, Math.min(1, opacity))

      img.style.opacity = opacity
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateOpacity)
        ticking = true
      }
    }

    updateOpacity() // تشغيل أولي عند تحميل الصفحة
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section ref={sectionRef} className="feature-strip">
      <img ref={imgRef} src="/feature.png" alt="" loading="lazy" />
    </section>
  )
}