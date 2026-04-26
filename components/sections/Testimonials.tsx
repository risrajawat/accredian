import { testimonials } from '@/data/mockData'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Client Stories
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Trusted by India is fastest-growing companies.
          </h2>
          <p className="text-base text-gray-500 mt-4">
            Hear from the L&D leaders and CHROs who transformed their organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
            >
              <span className="text-4xl text-blue-100 font-serif leading-none mb-4">&quot;</span>

              <p className="text-sm text-gray-700 leading-relaxed flex-1 italic">
                {t.quote}
              </p>

              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}