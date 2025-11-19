import { useState, useEffect } from 'react'
import { Leaf, Menu, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = 'text-sm font-medium text-slate-800 hover:text-green-700 transition-colors'

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/80 shadow-sm' : 'bg-white/60 backdrop-blur-sm'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="inline-flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center shadow-sm">
              <Leaf className="w-5 h-5" />
            </div>
            <span className="text-xl font-semibold text-slate-900">GreenScape</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className={linkClass}>About</a>
            <a href="#services" className={linkClass}>Services</a>
            <a href="#gallery" className={linkClass}>Gallery</a>
            <a href="#contact" className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full shadow-sm hover:bg-green-700 transition-colors">
              <Phone className="w-4 h-4" />
              Free Quote
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="px-4 py-3 space-y-3">
            <a onClick={() => setOpen(false)} href="#about" className="block text-slate-800">About</a>
            <a onClick={() => setOpen(false)} href="#services" className="block text-slate-800">Services</a>
            <a onClick={() => setOpen(false)} href="#gallery" className="block text-slate-800">Gallery</a>
            <a onClick={() => setOpen(false)} href="#contact" className="block text-white bg-green-600 px-4 py-2 rounded-md text-center">Free Quote</a>
          </div>
        </div>
      )}
    </header>
  )
}
