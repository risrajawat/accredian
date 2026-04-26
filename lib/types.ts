// Navigation
export interface NavLink {
  label: string
  href: string
}

// Features Section
export interface Feature {
  id: number
  title: string
  description: string
  icon: string
  popular?: boolean
}

// Testimonials Section
export interface Testimonial {
  id: number
  quote: string
  name: string
  role: string
  company: string
  initials: string
}

// Partners Section
export interface Partner {
  id: number
  name: string
  shortName: string
  type: 'IIT' | 'IIM' | 'Global' | 'Industry'
}

// How It Works Section
export interface Step {
  id: number
  number: string
  title: string
  description: string
  detail: string
}

// Stats Section
export interface Stat {
  id: number
  value: number
  suffix: string
  label: string
  sublabel: string
}

// Footer
export interface FooterColumn {
  heading: string
  links: NavLink[]
}

// Lead Capture Form
export interface LeadFormData {
  name: string
  email: string
  company: string
  teamSize: string
  message?: string
}

export interface LeadApiResponse {
  success: boolean
  id?: string
  message?: string
  error?: string
}