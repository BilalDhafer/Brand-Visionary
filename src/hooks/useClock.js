import { useEffect, useState } from 'react'

/** Returns a ticking HH:MM:SS AM/PM string in Baghdad time (UTC+3). */
export default function useClock() {
  const [time, setTime] = useState('--:--:-- --')

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const utc = now.getTime() + now.getTimezoneOffset() * 60000
      const baghdad = new Date(utc + 3 * 3600000)
      let h = baghdad.getHours()
      const m = String(baghdad.getMinutes()).padStart(2, '0')
      const s = String(baghdad.getSeconds()).padStart(2, '0')
      const ampm = h >= 12 ? 'PM' : 'AM'
      h = h % 12 || 12
      setTime(`${h}:${m}:${s} ${ampm}`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return time
}
