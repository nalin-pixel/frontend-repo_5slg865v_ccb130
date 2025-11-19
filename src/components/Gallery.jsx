export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1555448248-2571daf6344b?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1585325703258-98383172fa2c?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551892589-865f69869476?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1465311440653-ba9b1d9b0f5b?q=80&w=1200&auto=format&fit=crop',
  ]

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Gallery</h2>
          <p className="mt-3 text-slate-600">A glimpse of the lush spaces we create.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-2xl">
              <img src={src} alt="Landscaped project" className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
