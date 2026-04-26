import type {
  NavLink,
  Feature,
  Testimonial,
  Partner,
  Step,
  Stat,
  FooterColumn,
} from '@/lib/types'


export const navLinks: NavLink[] = [
  { label: 'Solutions', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Partners', href: '#partners' },
]


export const stats: Stat[] = [
  { id: 1, value: 500,  suffix: '+',  label: 'Enterprise Clients',  sublabel: 'Organizations trust Accredian' },
  { id: 2, value: 50,   suffix: 'K+', label: 'Learners Upskilled',  sublabel: 'Professionals transformed' },
  { id: 3, value: 98,   suffix: '%',  label: 'Satisfaction Rate',   sublabel: 'Learner satisfaction score' },
  { id: 4, value: 500,  suffix: '+',  label: 'Curated Programs',    sublabel: 'Across 15+ domains' },
  { id: 5, value: 94,   suffix: '%',  label: 'Completion Rate',     sublabel: 'Industry-leading outcome' },
  { id: 6, value: 50,   suffix: '+',  label: 'University Partners', sublabel: 'IITs, IIMs & global institutions' },
]

export const features: Feature[] = [
  {
    id: 1,
    title: 'World-Class Curriculum',
    description: 'Programs co-designed with IITs, IIMs, and global universities. Every course is rigorously structured for real-world applicability.',
    icon: '🎓',
    popular: true,
  },
  {
    id: 2,
    title: 'Enterprise L&D Dashboard',
    description: 'Real-time analytics on learner progress, engagement metrics, and ROI reporting — all in one command center.',
    icon: '📊',
    popular: false,
  },
  {
    id: 3,
    title: 'Expert Mentor Network',
    description: '1:1 live sessions with industry practitioners. Over 500 mentors across AI/ML, Data Science, Product, and Leadership.',
    icon: '🧑‍💼',
    popular: false,
  },
  {
    id: 4,
    title: 'Live Cohort Learning',
    description: 'Structured cohorts foster collaboration, accountability, and peer learning — driving completion rates above 94%.',
    icon: '👥',
    popular: false,
  },
  {
    id: 5,
    title: 'Custom Learning Paths',
    description: "Tailor programs to your organization's skill gaps, industry context, and strategic goals. No one-size-fits-all.",
    icon: '🗺️',
    popular: true,
  },
  {
    id: 6,
    title: 'Accredited Certificates',
    description: 'Globally recognized credentials from partner institutions. Verifiable, shareable, and career-defining.',
    icon: '📜',
    popular: false,
  },
  {
    id: 7,
    title: 'AI-Powered Personalization',
    description: 'Adaptive learning engine surfaces the right content at the right time, maximizing engagement and retention.',
    icon: '🤖',
    popular: false,
  },
  {
    id: 8,
    title: 'Seamless HR Integration',
    description: 'Native integrations with Workday, SAP SuccessFactors, and major HRMS platforms for frictionless deployment.',
    icon: '🔗',
    popular: false,
  },
]

export const steps: Step[] = [
  {
    id: 1,
    number: '01',
    title: 'Needs Assessment',
    description: 'We start with a deep-dive audit of your team\'s skill gaps and strategic objectives.',
    detail: 'Our L&D consultants conduct structured interviews, skills benchmarking, and role-based gap analysis to map a precise learning agenda for your organization.',
  },
  {
    id: 2,
    number: '02',
    title: 'Program Design',
    description: 'Custom learning paths are architected with your domain, culture, and timelines in mind.',
    detail: 'From curriculum selection to cohort composition and mentor matching — every program is built to your specifications, not off-the-shelf.',
  },
  {
    id: 3,
    number: '03',
    title: 'Deployment & Onboarding',
    description: 'Seamless rollout with zero disruption to your team\'s workflow.',
    detail: 'White-glove onboarding, SSO integration, HRMS sync, and dedicated account management ensure a day-one-ready launch.',
  },
  {
    id: 4,
    number: '04',
    title: 'Track & Optimize',
    description: 'Live dashboards surface progress, risks, and ROI in real time.',
    detail: 'Monthly business reviews, completion nudges, and adaptive content recommendations keep engagement high and learning sticky long after program end.',
  },
]

// ─── Testimonials ─────────────────────────────────────────
export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'Accredian Enterprise transformed how we think about talent development. Within 6 months, our data engineering team\'s velocity improved by 40%. The ROI is undeniable.',
    name: 'Priya Sharma',
    role: 'Chief People Officer',
    company: 'Razorpay',
    initials: 'PS',
  },
  {
    id: 2,
    quote: 'The combination of IIT-quality curriculum and live mentorship is unlike anything else in the market. Our engineers are now capable of leading ML projects independently.',
    name: 'Vikram Nair',
    role: 'VP of Engineering',
    company: 'PhonePe',
    initials: 'VN',
  },
  {
    id: 3,
    quote: 'We onboarded 300 managers across three geographies simultaneously. The enterprise dashboard made tracking trivially easy. Completion rates hit 96% — unprecedented for us.',
    name: 'Ananya Krishnan',
    role: 'Head of Learning & Development',
    company: 'Infosys BPM',
    initials: 'AK',
  },
]

export const partners: Partner[] = [
  { id: 1,  name: 'IIT Delhi',        shortName: 'IIT Delhi',   type: 'IIT' },
  { id: 2,  name: 'IIT Bombay',       shortName: 'IIT Bombay',  type: 'IIT' },
  { id: 3,  name: 'IIT Kanpur',       shortName: 'IIT Kanpur',  type: 'IIT' },
  { id: 4,  name: 'IIT Madras',       shortName: 'IIT Madras',  type: 'IIT' },
  { id: 5,  name: 'IIT Roorkee',      shortName: 'IIT Roorkee', type: 'IIT' },
  { id: 6,  name: 'IIM Bangalore',    shortName: 'IIM-B',       type: 'IIM' },
  { id: 7,  name: 'IIM Kozhikode',    shortName: 'IIM-K',       type: 'IIM' },
  { id: 8,  name: 'IIM Lucknow',      shortName: 'IIM-L',       type: 'IIM' },
  { id: 9,  name: 'Great Lakes',      shortName: 'Great Lakes', type: 'Global' },
  { id: 10, name: 'NUS Singapore',    shortName: 'NUS',         type: 'Global' },
  { id: 11, name: 'MIT xPRO',         shortName: 'MIT xPRO',    type: 'Global' },
  { id: 12, name: 'Google',           shortName: 'Google',      type: 'Industry' },
  { id: 13, name: 'Microsoft',        shortName: 'Microsoft',   type: 'Industry' },
  { id: 14, name: 'Amazon AWS',       shortName: 'AWS',         type: 'Industry' },
  { id: 15, name: 'IBM',              shortName: 'IBM',         type: 'Industry' },
]

// ─── Footer ───────────────────────────────────────────────
export const footerColumns: FooterColumn[] = [
  {
    heading: 'Solutions',
    links: [
      { label: 'Enterprise Learning', href: '#' },
      { label: 'Custom Programs',     href: '#' },
      { label: 'Analytics Dashboard', href: '#' },
      { label: 'HR Integrations',     href: '#' },
      { label: 'Certificates',        href: '#' },
    ],
  },
  {
    heading: 'Programs',
    links: [
      { label: 'Data Science & AI',   href: '#' },
      { label: 'Product Management',  href: '#' },
      { label: 'Leadership',          href: '#' },
      { label: 'Business Analytics',  href: '#' },
      { label: 'Cloud Computing',     href: '#' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers',  href: '#' },
      { label: 'Blog',     href: '#' },
      { label: 'Press',    href: '#' },
      { label: 'Contact',  href: '#' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Case Studies',  href: '#' },
      { label: 'Whitepapers',   href: '#' },
      { label: 'Webinars',      href: '#' },
      { label: 'L&D Playbook',  href: '#' },
      { label: 'API Docs',      href: '#' },
    ],
  },
]