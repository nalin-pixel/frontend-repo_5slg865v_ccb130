import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative pt-24">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1546549039-49e36a5b1f85?q=80&w=2000&auto=format&fit=crop"
          alt="Lush landscaped garden with green lawn and stone pathway"
          className="w-full h-[80vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[70vh]">
          <div className="text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Premium Landscaping & Garden Design
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-lg text-white/90 max-w-xl"
            >
              Transforming outdoor spaces into lush, inviting retreats. From precision mowing to bespoke garden designs and lighting, we craft landscapes that thrive.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg shadow-green-900/20 transition-colors">
                Get a Free Quote
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur border border-white/20">
                Our Services
              </a>
            </motion.div>
          </div>

          <div className="hidden lg:block" />
        </div>

        <div className="-mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: 'Mowing', icon: 'https://images.unsplash.com/photo-1594549181473-0218c8936a2a?q=80&w=600&auto=format&fit=crop' },
            { title: 'Garden Design', icon: 'https://images.unsplash.com/photo-1465310477141-6fb93167a273?q=80&w=600&auto=format&fit=crop' },
            { title: 'Hedge Trimming', icon: 'https://images.unsplash.com/photo-1585325701954-78e64b2303c8?q=80&w=600&auto=format&fit=crop' },
            { title: 'Irrigation', icon: 'https://images.unsplash.com/photo-1523419409543-d59a99a817d3?q=80&w=600&auto=format&fit=crop' },
          ].map((item) => (
            <div key={item.title} className="relative overflow-hidden rounded-2xl shadow-sm">
              <img src={item.icon} alt={item.title} className="h-32 w-full object-cover" />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 p-4 flex items-end">
                <span className="text-white font-semibold">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
