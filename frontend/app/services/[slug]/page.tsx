import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ChevronRight, CheckCircle2, Phone } from 'lucide-react'
import { services, getService } from '../services-data'

const SITE_URL = 'https://www.revtechmechanical.com.au'

export const dynamicParams = false

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)

  if (!service) {
    return {}
  }

  const canonical = `/services/${service.slug}`

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: `${service.metaTitle} | Rev-Tech Mechanical`,
      description: service.metaDescription,
      url: `${SITE_URL}${canonical}`,
      images: [{ url: `/images/services/${service.slug}.webp`, width: 1200, height: 800, alt: service.name }],
    },
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)

  if (!service) {
    notFound()
  }

  const canonical = `${SITE_URL}/services/${service.slug}`
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    serviceType: service.name,
    description: service.metaDescription,
    url: canonical,
    areaServed: 'Everton Hills, Brisbane Northside, QLD',
    provider: {
      '@type': 'AutoRepair',
      '@id': `${SITE_URL}/#business`,
      name: 'Rev-Tech Mechanical',
    },
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
      { '@type': 'ListItem', position: 3, name: service.name, item: canonical },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Page Header with feature image */}
      <section className="relative pt-36 pb-20 bg-[#111111] overflow-hidden">
        <Image
          src={`/images/services/${service.slug}.webp`}
          alt={`${service.name} at Rev-Tech Mechanical, Everton Hills`}
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-[#111111]/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><ChevronRight className="w-4 h-4 text-gray-600" /></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><ChevronRight className="w-4 h-4 text-gray-600" /></li>
              <li className="text-[#E61515] font-medium">{service.name}</li>
            </ol>
          </nav>

          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 bg-[#E61515] rounded-2xl flex items-center justify-center shrink-0">
              <service.icon className="w-7 h-7 text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 max-w-3xl">
            {service.name}
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl">{service.tagline}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Intro copy */}
            <div className="lg:col-span-3 space-y-5">
              {service.intro.map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed text-lg">{para}</p>
              ))}

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#E61515] hover:bg-[#C01010] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:shadow-xl hover:shadow-red-900/40 hover:-translate-y-1 group"
                >
                  Book this service
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* What's included */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h2 className="text-xl font-bold text-[#111111] mb-6">What’s included</h2>
                <ul className="space-y-4">
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E61515] mt-0.5 shrink-0" />
                      <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-[#111111] mb-2">Other Services</h2>
          <div className="w-16 h-1 bg-[#E61515] mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="service-card bg-[#F5F5F5] rounded-2xl p-8 border border-gray-100 hover:border-[#E61515]/30 group"
              >
                <div className="w-14 h-14 bg-[#E61515]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#E61515]/20 transition-colors">
                  <s.icon className="w-7 h-7 text-[#E61515]" />
                </div>
                <h3 className="text-lg font-bold text-[#111111] mb-3 group-hover:text-[#E61515] transition-colors">
                  {s.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E61515] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Need {service.name}?
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Get in touch for an honest quote. We service all makes and models in Everton Hills and across Brisbane’s northside.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
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
