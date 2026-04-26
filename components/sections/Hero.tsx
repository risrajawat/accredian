import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              <span>🏢</span>
              <span>Trusted by 500+ Enterprise Organizations</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Build the Skills{' '}
              <span className="text-blue-600">Your Enterprise</span>{' '}
              Needs to Win.
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              India is most trusted enterprise learning platform. Partner with IITs, IIMs,
              and global universities to upskill your teams at scale — with measurable outcomes.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button variant="primary" size="lg">Schedule a Free Demo</Button>
              <Button variant="outline" size="lg">See Platform Tour</Button>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                { icon: '🎓', text: 'IIT & IIM certified' },
                { icon: '⚡', text: 'Go live in 2 weeks' },
                { icon: '📊', text: 'Real-time analytics' },
              ].map((pill) => (
                <div
                  key={pill.text}
                  className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-sm text-gray-700 shadow-sm"
                >
                  <span>{pill.icon}</span>
                  <span>{pill.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 w-full max-w-sm">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-sm font-semibold text-gray-900">Enterprise Dashboard</h3>
                <span className="text-xs text-gray-400">Q4 Learning Report</span>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { label: 'Active Learners', value: '2,847', delta: '+12%' },
                  { label: 'Avg. Score',       value: '91.4',  delta: '+5.2' },
                  { label: 'Completion',        value: '96%',   delta: '+8%' },
                ].map((m) => (
                  <div key={m.label} className="bg-gray-50 rounded-xl p-3 text-center">
                    <p className="text-lg font-bold text-gray-900">{m.value}</p>
                    <p className="text-xs text-green-500 font-medium">{m.delta}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {[
                  { label: 'Data Science & AI',     pct: 89 },
                  { label: 'Product Management',     pct: 76 },
                  { label: 'Leadership & Strategy',  pct: 92 },
                ].map((bar) => (
                  <div key={bar.label}>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>{bar.label}</span>
                      <span>{bar.pct}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${bar.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-gray-400">+2,842 learners enrolled</span>
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                  🎓 IIT Certified
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}