import type { Metadata } from 'next'
import Image from 'next/image'
import { Award, Users, Wrench, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Rev-Tech Mechanical has 40+ years of combined experience servicing all makes and models in Everton Hills QLD. Learn about our team and specialist equipment.',
  alternates: { canonical: '/about' },
}

const stats = [
  { value: '40+', label: 'Years Experience' },
  { value: 'All', label: 'Makes & Models' },
  { value: '100%', label: 'Honest Service' },
  { value: 'QLD', label: 'Licensed Inspectors' },
]

const equipment = [
  'Decarbon Machine — removes carbon build-up and restores engine performance',
  'Wheel Alignment Equipment — precision laser alignment for improved tyre life',
  'Diagnostic Scan Tool — reads OBD-II codes across all major vehicle brands',
  'Safe-T-Stop Machine — accurate brake performance and balance testing',
]

const values = [
  'We only recommend work your vehicle genuinely requires.',
  'We give you a clear, upfront quote before any work begins.',
  'We use quality parts and follow manufacturer specifications.',
  'We stand behind every service we perform.',
]

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#111111] pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-80 h-80 bg-[#E61515] rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            About <span className="text-[#E61515]">Us</span>
          </h1>
          <div className="w-16 h-1 bg-[#E61515] mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A trusted local workshop where craftsmanship meets modern diagnostics.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#E61515] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-black text-white">{stat.value}</div>
                <div className="text-white/80 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-[#E61515]" />
                <span className="text-[#E61515] font-semibold text-sm uppercase tracking-wider">Our Story</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#111111] mb-6">
                Decades of Expertise,<br />
                <span className="text-[#E61515]">Always Honest</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Rev-Tech Mechanical has been proudly serving the Everton Hills community and
                surrounding Brisbane northside suburbs for decades. With over 40 years of combined
                mechanical experience, our team has seen — and fixed — just about everything.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                We specialise in servicing all makes and models, including both passenger vehicles
                and commercial fleets. Whether you drive a small hatchback, a large 4WD, or a
                diesel truck, we have the knowledge, equipment, and parts to keep you on the road.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Our philosophy is simple: treat every customer like family. That means honest
                assessments, fair prices, and quality workmanship you can depend on.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#E61515]/10 rounded-3xl" />
              <Image
                src="/images/about.webp"
                alt="Professional automotive workshop at Rev-Tech Mechanical"
                width={800}
                height={600}
                className="relative rounded-2xl object-cover w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Values */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-[#E61515]" />
                <span className="text-[#E61515] font-semibold text-sm uppercase tracking-wider">Our Promise</span>
              </div>
              <h2 className="text-3xl font-black text-[#111111] mb-8">
                What We Stand For
              </h2>
              <ul className="space-y-4">
                {values.map((v, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E61515] mt-0.5 shrink-0" />
                    <span className="text-gray-600 leading-relaxed">{v}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Equipment */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="w-6 h-6 text-[#E61515]" />
                <span className="text-[#E61515] font-semibold text-sm uppercase tracking-wider">Our Equipment</span>
              </div>
              <h2 className="text-3xl font-black text-[#111111] mb-8">
                Specialist Tools
              </h2>
              <ul className="space-y-4">
                {equipment.map((eq, i) => (
                  <li key={i} className="bg-white rounded-xl p-4 border border-gray-100 flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E61515] mt-2 shrink-0" />
                    <span className="text-gray-600 text-sm leading-relaxed">{eq}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
