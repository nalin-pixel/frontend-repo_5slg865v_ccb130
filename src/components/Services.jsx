import { LawnMower, Flower2, Scissors, Droplets } from 'lucide-react'

const services = [
  {
    title: 'Lawn Mowing',
    icon: LawnMower,
    desc: 'Precision mowing and edging for a crisp, healthy lawn.',
  },
  {
    title: 'Garden Design',
    icon: Flower2,
    desc: 'Bespoke plant selection and layouts that thrive year‑round.',
  },
  {
    title: 'Hedge Trimming',
    icon: Scissors,
    desc: 'Clean lines and balanced shapes for hedges and shrubs.',
  },
  {
    title: 'Irrigation Systems',
    icon: Droplets,
    desc: 'Efficient watering solutions tailored to your garden.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-green-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Services</h2>
          <p className="mt-3 text-slate-600">End‑to‑end care for vibrant, enduring outdoor spaces.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="group rounded-2xl bg-white border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-4 group-hover:bg-green-200">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
