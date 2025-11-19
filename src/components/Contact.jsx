import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    // Simulate send
    setTimeout(() => setStatus('Thanks! We will contact you shortly.'), 800)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-green-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Get in Touch</h2>
            <p className="mt-3 text-slate-600">Request a free on‑site quote or ask us anything about your outdoor space.</p>
            <div className="mt-6 rounded-2xl bg-white border border-slate-100 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-sm">Phone</p>
                  <p className="text-slate-900 font-semibold">(555) 123‑4567</p>
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Email</p>
                  <p className="text-slate-900 font-semibold">hello@greenscape.com</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-600">First name</label>
                <input required className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-600">Last name</label>
                <input required className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-600">Email</label>
                <input type="email" required className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-600">Message</label>
                <textarea required rows={4} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
            </div>
            <button type="submit" className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold shadow">
              Send Message
            </button>
            {status && <p className="mt-3 text-sm text-green-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
