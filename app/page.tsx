import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Testimonials from '@/components/sections/Testimonials'
import ContactForm from '@/components/sections/ContactForm'
import HowItWorks from '@/components/sections/HowItWorks'
import Partners from '@/components/sections/Partners'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks/>
        <Testimonials />
        <Partners/>
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}