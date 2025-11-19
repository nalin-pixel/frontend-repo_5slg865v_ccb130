export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">About Us</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We are a premium landscaping company dedicated to crafting beautiful, sustainable outdoor spaces. Our team combines horticultural expertise with thoughtful design to deliver lawns, gardens, and outdoor living areas that look stunning and stand the test of time.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-slate-700">
              <li className="p-4 rounded-xl bg-green-50 border border-green-100">Certified horticulture experts</li>
              <li className="p-4 rounded-xl bg-green-50 border border-green-100">Premium eco-friendly materials</li>
              <li className="p-4 rounded-xl bg-green-50 border border-green-100">On-time, on-budget delivery</li>
              <li className="p-4 rounded-xl bg-green-50 border border-green-100">Ongoing maintenance plans</li>
            </ul>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?q=80&w=1600&auto=format&fit=crop"
              alt="Gardeners working in a well-designed garden"
              className="rounded-3xl shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-3xl bg-green-200/60 -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-3xl bg-amber-200/60 -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
