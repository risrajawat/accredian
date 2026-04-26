"use client"
import { partners } from '@/data/mockData'

const typeColors: Record<string, string> = {
  IIT:      'bg-orange-50 text-orange-700 border-orange-200',
  IIM:      'bg-purple-50 text-purple-700 border-purple-200',
  Global:   'bg-green-50  text-green-700  border-green-200',
  Industry: 'bg-blue-50   text-blue-700   border-blue-200',
}

export default function Partners() {
  // Duplicate list so the marquee loops seamlessly
  const doubled = [...partners, ...partners]

  return (
    <section id="partners" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Academic & Industry Partners
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Built on world-class institutions.
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            Our programs are co-designed and certified by India is most prestigious academic
            institutions and global technology leaders.
          </p>
        </div>
      </div>

      {/* Scrolling Marquee */}
      <div className="relative">
        <div className="flex gap-4 animate-marquee whitespace-nowrap">
          {doubled.map((partner, idx) => (
            <div
              key={`${partner.id}-${idx}`}
              className={`inline-flex items-center gap-2 border rounded-xl px-4 py-2.5 text-sm font-semibold flex-shrink-0 ${typeColors[partner.type]}`}
            >
              <span className="text-xs font-bold opacity-60">{partner.type}</span>
              <span>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats below marquee */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-gray-50 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-600 max-w-md text-center sm:text-left">
            Every program on our platform carries the credential of a top-tier institution.
            No fluff. No self-certification. Real university partnerships, real accreditation.
          </p>
          <div className="flex gap-10">
            <div className="text-center">
              <p className="text-3xl font-extrabold text-blue-600">50+</p>
              <p className="text-xs text-gray-500 mt-1">Partner Institutions</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-blue-600">200+</p>
              <p className="text-xs text-gray-500 mt-1">Certified Programs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  )
}