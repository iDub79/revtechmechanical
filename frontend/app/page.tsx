import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Shield, DollarSign, Award, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rev-Tech Mechanical | Trusted Car Mechanic in Everton Hills, QLD',
  description:
    'Expert car servicing and repairs in Everton Hills QLD. 40+ years experience. Log book servicing, safety certificates, auto electrical. Call (07) 3355 2248.',
  alternates: { canonical: '/' },
}

const valueProps = [
  {
    icon: Award,
    title: '40+ Years Experience',
    desc: 'Our mechanics bring decades of combined expertise to every job, from routine services to complex diagnostics.',
  },
  {
    icon: Shield,
    title: 'Quality You Can Trust',
    desc: 'We use quality parts and follow manufacturer specifications to keep your vehicle running at its best.',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    desc: "Competitive rates with no hidden fees. We give you an honest assessment and upfront quote every time.",
  },
]

const serviceHighlights = [
  'Log Book Servicing',
  'Safety Certificates',
  'Auto Electrical',
  'Diesel Servicing',
  'Brake & Oil Service',
  'Suspension & Steering',
  'Wheel Alignment',
  'Diagnostic Scanning',
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center">
        <Image
          src="/images/hero.webp"
          alt="The Rev-Tech Mechanical workshop with vehicles on hoists"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#E61515]/20 border border-[#E61515]/40 text-[#E61515] text-xs font-semibold px-4 py-2 rounded-full mb-6 animate-[fadeInUp_0.5s_ease-out]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E61515] animate-pulse" />
              Everton Hills, QLD
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 animate-[fadeInUp_0.6s_ease-out_0.1s_both]">
              A Mechanic<br />
              <span className="text-[#E61515]">You Can Trust</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
              Over 40 years of combined experience servicing all makes and models. From log book
              services to complex diagnostics — we keep your vehicle running safely and reliably.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
              <Link
                href="/contact"
                id="hero-cta-contact"
                className="inline-flex items-center justify-center gap-2 bg-[#E61515] hover:bg-[#C01010] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:shadow-xl hover:shadow-red-900/50 hover:-translate-y-1 group"
              >
                Book a Service
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:0733552248"
                id="hero-cta-phone"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:bg-white/10"
              >
                <Phone className="w-4 h-4" />
                (07) 3355 2248
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ── VALUE PROPS ── */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-[#111111] mb-4">
              Why Choose Rev-Tech?
            </h2>
            <div className="w-16 h-1 bg-[#E61515] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((vp, i) => (
              <div
                key={i}
                className="service-card bg-white rounded-2xl p-8 border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-[#E61515]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <vp.icon className="w-8 h-8 text-[#E61515]" />
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-3">{vp.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{vp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES STRIP ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-black text-[#111111] mb-4">
                Comprehensive<br />
                <span className="text-[#E61515]">Automotive Services</span>
              </h2>
              <div className="w-16 h-1 bg-[#E61515] mb-6" />
              <p className="text-gray-500 leading-relaxed mb-8">
                From routine maintenance to complex repairs, Rev-Tech Mechanical is equipped to
                handle all your vehicle's needs with precision and care.
              </p>
              <Link
                href="/services"
                id="home-services-link"
                className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#E61515] text-white font-bold px-8 py-4 rounded-full text-sm transition-all duration-300 group"
              >
                View All Services
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-3 w-full">
              {serviceHighlights.map((s) => (
                <div
                  key={s}
                  className="flex items-center gap-3 bg-[#F5F5F5] hover:bg-[#E61515]/5 border border-gray-100 hover:border-[#E61515]/30 rounded-xl px-4 py-3 transition-all duration-200 group"
                >
                  <span className="w-2 h-2 rounded-full bg-[#E61515] shrink-0" />
                  <span className="text-sm font-medium text-[#111111] group-hover:text-[#E61515] transition-colors">
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E61515] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E61515] rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to Book a Service?
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Get in touch today for an honest quote. We service all makes and models including
            commercial fleets.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              id="cta-banner-contact"
              className="inline-flex items-center gap-2 bg-[#E61515] hover:bg-[#C01010] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:shadow-xl hover:shadow-red-900/50 hover:-translate-y-1 group"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:0733552248"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold text-base transition-colors"
            >
              <Phone className="w-5 h-5 text-[#E61515]" />
              (07) 3355 2248
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
