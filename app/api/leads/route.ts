import { NextRequest, NextResponse } from 'next/server'
import type { LeadFormData } from '@/lib/types'

const leads: Array<LeadFormData & { id: string; createdAt: string }> = []

export async function POST(req: NextRequest) {
  try {
    const body: LeadFormData = await req.json()

    const { name, email, company, teamSize } = body

    if (!name || !email || !company || !teamSize) {
      return NextResponse.json(
        { success: false, error: 'name, email, company and teamSize are required.' },
        { status: 400 }
      )
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // Save to mock DB
    const lead = {
      id: `lead_${Date.now()}`,
      name,
      email,
      company,
      teamSize,
      message: body.message ?? '',
      createdAt: new Date().toISOString(),
    }
    leads.push(lead)

    console.log(`[leads] New lead saved — total: ${leads.length}`, lead)

    return NextResponse.json(
      {
        success: true,
        id: lead.id,
        message: "We'll reach out within 24 hours.",
      },
      { status: 201 }
    )
  } catch {
    return NextResponse.json(
      { success: false, error: 'Internal server error. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ total: leads.length, leads })
}