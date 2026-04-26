# Accredian Enterprise — Partial Clone

A pixel-faithful partial clone of [enterprise.accredian.com](https://enterprise.accredian.com) built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Live Demo

[https://your-vercel-url.vercel.app](https://accredian12.vercel.app)

## 📦 GitHub Repository

[https://github.com/your-username/accredian](https://github.com/risrajawat/accredian)

---

## 🛠 Setup Instructions

```bash
# 1. Clone the repo
git clone https://github.com/risrajawat/accredian.git
cd accredian

# 2. Install dependencies
npm install

# 3. Run dev server
npm run dev

# 4. Open in browser
http://localhost:3000
```

No `.env` file is needed — the lead API uses an in-memory store.

---

## 📁 Folder Structure

```
accredian/
├── app/
│   ├── page.tsx              # Composes all sections
│   ├── layout.tsx            # Root layout, Inter font, metadata
│   └── api/leads/route.ts    # POST /api/leads — lead capture API
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Fixed navbar with mobile hamburger
│   │   └── Footer.tsx        # 4-column footer
│   ├── sections/
│   │   ├── Hero.tsx          # Headline + dashboard card
│   │   ├── Stats.tsx         # Animated counters
│   │   ├── Features.tsx      # 8-card capabilities grid
│   │   ├── HowItWorks.tsx    # 4-step process stepper
│   │   ├── Testimonials.tsx  # 3 quote cards
│   │   ├── Partners.tsx      # Auto-scrolling marquee
│   │   └── ContactForm.tsx   # Lead capture form
│   └── ui/
│       ├── Button.tsx        # Reusable button (primary/outline)
│       └── FeatureCard.tsx   # Feature card with Popular badge
├── data/
│   └── mockData.ts           # All static content as typed arrays
└── lib/
    └── types.ts              # Shared TypeScript interfaces
```

---

## 🧠 Approach Taken

1. **Plan first, code second** — defined folder structure, component breakdown, and data layer before writing any code.
2. **Types → Data → UI atoms → Sections** — built bottom-up so every component had its dependencies ready.
3. **Mock data layer** (`data/mockData.ts`) — all content is centralized and typed; swapping to a real CMS or API only requires changing this file.
4. **API route** (`/api/leads`) — validates input, stores to in-memory array, and returns structured JSON. Ready to replace with a real database.
5. **Responsive-first** — all sections use Tailwind's mobile-first breakpoints (`sm:`, `md:`, `lg:`).

---

## 🤖 AI Usage (Claude)

| Area | How AI helped | What I manually adjusted |
|------|--------------|--------------------------|
| Implementation plan | Generated full folder structure, build order, and component breakdown | Finalized structure to match assignment scope |
| `lib/types.ts` | Generated all TypeScript interfaces | Reviewed field names for accuracy |
| `data/mockData.ts` | Populated all mock arrays (features, testimonials, partners, etc.) | Verified content matches reference site |
| All section components | Scaffolded JSX structure and Tailwind classes | Tweaked spacing, colors, responsive behavior |
| API route | Generated validation logic and response format | Reviewed error handling |
| README | Generated full template | Updated links and descriptions |

---

## ✅ What's Implemented

- [x] Sticky responsive Navbar (mobile hamburger)
- [x] Hero section with dashboard preview card
- [x] Stats section with animated counters (IntersectionObserver)
- [x] Features grid (8 cards, Popular badge)
- [x] How It Works stepper (4 steps)
- [x] Testimonials (3 quote cards)
- [x] Partners scrolling marquee
- [x] Lead capture Contact Form (bonus)
- [x] `/api/leads` POST API route (bonus)
- [x] Footer with 4-column links

---

## 🔮 Improvements With More Time

1. **Real database** — replace in-memory leads array with Supabase or Postgres via Prisma
2. **Email notification** — send confirmation email to the lead via Resend or SendGrid
3. **Animations** — add Framer Motion for scroll-triggered section reveals
4. **Programs section** — build a filterable program cards grid
5. **CMS integration** — connect mockData to Contentful or Sanity for content management
6. **Auth** — add Sign In via NextAuth for the enterprise dashboard preview
7. **Tests** — add Vitest unit tests for API route and key components
8. **SEO** — add Open Graph tags and structured data (JSON-LD)
