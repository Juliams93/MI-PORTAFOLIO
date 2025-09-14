import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      aria-label="Volver arriba"
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-400 ${visible ? 'opacity-90 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={handleClick}
      tabIndex={visible ? 0 : -1}
      style={{ boxShadow: '0 4px 24px 0 rgba(80,0,120,0.13)' }}
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  )
}
