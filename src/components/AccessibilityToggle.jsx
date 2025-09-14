// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export default function AccessibilityToggle({ enabled, setEnabled }) {
  return (
    <button
      aria-label={enabled ? 'Desactivar modo accesibilidad' : 'Activar modo accesibilidad'}
      className={`fixed bottom-6 left-6 z-50 p-3 rounded-full shadow-lg bg-gradient-to-r from-slate-700 to-purple-700 text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400`}
      onClick={() => setEnabled(!enabled)}
      type="button"
      style={{ boxShadow: '0 4px 24px 0 rgba(80,0,120,0.13)' }}
    >
      {enabled ? <EyeOff className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
    </button>
  )
}
