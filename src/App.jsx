import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
        <footer className="border-t border-slate-100 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-600">© {new Date().getFullYear()} GreenScape Landscaping. All rights reserved.</p>
            <p className="text-slate-500 text-sm">Crafted with care • Premium service • Eco‑friendly</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
