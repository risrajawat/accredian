import { steps } from '@/data/mockData'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
            The Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Live in 14 days. Measurable ROI in 90.
          </h2>
          <p className="text-base text-gray-500 mt-4 max-w-2xl mx-auto">
            Our structured four-step methodology takes you from assessment to measurable outcomes
            without disrupting your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-blue-100 z-0" />

          {steps.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center md:items-center">

              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-5 shadow-md">
                {step.number}
              </div>

              <h3 className="text-base font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 mb-3 leading-relaxed">{step.description}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}