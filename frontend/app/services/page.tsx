import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services } from './services-data'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Rev-Tech Mechanical offers log book servicing, safety certificates, auto electrical, brakes, suspension, diesel servicing and more in Everton Hills QLD.',
  alternates: { canonical: '/services' },
}

const equipment = [
  'Decarbon Machine',
  'Wheel Alignment Equipment',
  'Diagnostic Scan Tool',
  'Safe-T-Stop Machine',
]

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#111111] pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E61515] rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            Our <span className="text-[#E61515]">Services</span>
          </h1>
          <div className="w-16 h-1 bg-[#E61515] mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From routine maintenance to specialist repairs — Rev-Tech Mechanical is your
            one-stop workshop for all makes and models.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="service-card bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#E61515]/30 flex flex-col group"
              >
                <div className="w-14 h-14 bg-[#E61515]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#E61515]/20 transition-colors">
                  <service.icon className="w-7 h-7 text-[#E61515]" />
                </div>
                <h2 className="text-lg font-bold text-[#111111] mb-3 group-hover:text-[#E61515] transition-colors">
                  {service.name}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{service.shortDesc}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#E61515]">
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist Equipment */}
      <section className="py-20 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E61515] rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Specialist Equipment
          </h2>
          <div className="w-16 h-1 bg-[#E61515] mx-auto mb-4" />
          <p className="text-gray-400 mb-12 max-w-xl mx-auto">
            We invest in the latest diagnostic and servicing tools so we can deliver
            the highest level of care for your vehicle.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {equipment.map((eq) => (
              <div
                key={eq}
                className="bg-white/5 border border-white/10 text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-[#E61515]/20 hover:border-[#E61515]/40 transition-all duration-200"
              >
                {eq}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
