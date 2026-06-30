import type { Metadata } from 'next'
import { Phone, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Rev-Tech Mechanical in Everton Hills QLD. Call (07) 3355 2248 or send us a message. Mon–Fri 8am–5pm.',
  alternates: { canonical: '/contact' },
}

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    value: '(07) 3355 2248',
    href: 'tel:0733552248',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Unit 2, Building 5, 991 South Pine Rd\nEverton Hills QLD 4053',
    href: 'https://maps.google.com/?q=991+South+Pine+Rd+Everton+Hills+QLD+4053',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Monday – Friday: 8:00 AM – 5:00 PM\nSaturday – Sunday: Closed',
    href: null,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#111111] pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E61515] rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            Get In <span className="text-[#E61515]">Touch</span>
          </h1>
          <div className="w-16 h-1 bg-[#E61515] mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Have a question or need to book a service? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Contact Info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-black text-[#111111]">Our Details</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Drop by our workshop in Everton Hills or give us a call. We service all makes and
                models including commercial fleets.
              </p>

              <div className="space-y-4">
                {contactDetails.map((detail) => {
                  const Inner = (
                    <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 group hover:border-[#E61515]/30 hover:shadow-md transition-all duration-200">
                      <div className="w-10 h-10 bg-[#E61515]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#E61515]/20 transition-colors">
                        <detail.icon className="w-5 h-5 text-[#E61515]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                          {detail.label}
                        </p>
                        <p className="text-sm font-medium text-[#111111] whitespace-pre-line">
                          {detail.value}
                        </p>
                      </div>
                    </div>
                  )
                  return detail.href ? (
                    <a
                      key={detail.label}
                      href={detail.href}
                      target={detail.href.startsWith('http') ? '_blank' : undefined}
                      rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {Inner}
                    </a>
                  ) : (
                    <div key={detail.label}>{Inner}</div>
                  )
                })}
              </div>

              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  title="Rev-Tech Mechanical location map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.32!2d152.9743!3d-27.3983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9150a5b3e6b8d9%3A0x0!2s991+South+Pine+Rd%2C+Everton+Hills+QLD+4053!5e0!3m2!1sen!2sau!4v1"
                  width="100%"
                  height="220"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-black text-[#111111] mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
