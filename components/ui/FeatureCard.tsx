import type { Feature } from '../../lib/types'

interface FeatureCardProps {
  feature: Feature
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md hover:border-blue-200 transition-all duration-200">
      {feature.popular && (
        <span className="absolute top-4 right-4 text-xs font-semibold bg-blue-100 text-blue-600 px-2.5 py-1 rounded-full">
          Popular
        </span>
      )}
      <div className="text-3xl mb-4">{feature.icon}</div>
      <h3 className="text-base font-semibold text-gray-900 mb-2">{feature.title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
      <button className="mt-4 text-sm font-medium text-blue-600 hover:underline">
        Learn more
      </button>
    </div>
  )
}