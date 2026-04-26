'use client'

import { useState } from 'react'
import type { LeadFormData, LeadApiResponse } from '@/lib/types'
import Button from '@/components/ui/Button'

const TEAM_SIZES = [
  '1 – 10 employees',
  '11 – 50 employees',
  '51 – 200 employees',
  '201 – 500 employees',
  '501 – 1,000 employees',
  '1,000+ employees',
]

const initialForm: LeadFormData = {
  name: '',
  email: '',
  company: '',
  teamSize: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<LeadFormData>(initialForm)
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState<LeadApiResponse | null>(null)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setResponse(null)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data: LeadApiResponse = await res.json()
      setResponse(data)
      if (data.success) setForm(initialForm)
    } catch {
      setResponse({ success: false, error: 'Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left — Info */}
          <div className="text-white">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-4">
              Get in Touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              Let&apos;s build your learning future together.
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed mb-8">
              Fill in the form and one of our enterprise L&D consultants will reach out
              within 24 hours to understand your needs and schedule a personalized demo.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Free 30-min platform walkthrough with your use case',
                'Custom program recommendation for your industry',
                'Pricing tailored to your team size and scope',
                'No commitment, no spam — just a conversation',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-blue-100">
                  <span className="text-green-300 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-blue-200">
              Or reach us directly:{' '}
              <a
                href="mailto:enterprise@accredian.com"
                className="text-white underline underline-offset-2"
              >
                enterprise@accredian.com
              </a>
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            {response?.success ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Request Received!</h3>
                <p className="text-sm text-gray-500">{response.message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Smith"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@company.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    required
                    placeholder="Acme Corp"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Team Size <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="teamSize"
                    value={form.teamSize}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select team size</option>
                    {TEAM_SIZES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Message (optional)
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your learning goals..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                {response?.error && (
                  <p className="text-xs text-red-500">{response.error}</p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={loading}
                  className="w-full"
                >
                  {loading ? 'Submitting…' : 'Request a Free Demo'}
                </Button>

                <p className="text-xs text-gray-400 text-center">
                  By submitting, you agree to our{' '}
                  <a href="#" className="underline">Privacy Policy</a>.
                  No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}