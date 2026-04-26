import { features } from '@/data/mockData'
import FeatureCard from '@/components/ui/FeatureCard'

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Platform Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Everything your L&D team needs to scale.
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            From curriculum design to analytics — Accredian Enterprise is the operating system
            for ambitious learning organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}