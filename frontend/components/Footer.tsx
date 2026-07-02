import Image from 'next/image'
import Link from 'next/link'
import { Phone, MapPin, Clock, Star } from 'lucide-react'

const MAP_URL =
  'https://www.google.com/maps/place/Rev-Tech+Mechanical/@-27.390812,152.973584,15z/data=!4m6!3m5!1s0x6b9157b6803de80b:0x40d51232ed79821e!8m2!3d-27.3906095!4d152.972074!16s%2Fg%2F1tmk8p28'

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                alt="Rev-Tech Mechanical"
                width={300}
                height={249}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              A mechanic you can trust. Over 40 years of combined experience servicing all makes and models.
            </p>
            <a
              href="https://www.facebook.com/revtechmechanical"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-gray-400 hover:text-[#E61515] transition-colors"
              aria-label="Follow us on Facebook"
            >
              {/* Inline Facebook SVG — lucide-react doesn't export Facebook */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Follow us on Facebook
            </a>
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 text-sm text-gray-400 hover:text-[#E61515] transition-colors"
              aria-label="Find us on Google"
            >
              <Star className="w-5 h-5" aria-hidden="true" />
              Find us on Google
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#E61515] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E61515] mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">
                  Unit 2, Building 5<br />
                  991 South Pine Rd<br />
                  Everton Hills QLD 4053
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E61515] shrink-0" />
                <a href="tel:0733552248" className="text-sm text-gray-400 hover:text-white transition-colors">
                  (07) 3355 2248
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#E61515] mt-0.5 shrink-0" />
                <div>
                  <span className="block text-sm text-white">Monday – Friday</span>
                  <span className="text-sm text-gray-400">8:00 AM – 5:00 PM</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gray-600 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-sm text-gray-500">Saturday – Sunday</span>
                  <span className="text-sm text-gray-500">Closed</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Rev-Tech Mechanical. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Unit 2/5, 991 South Pine Rd, Everton Hills QLD 4053
          </p>
        </div>
      </div>
    </footer>
  )
}
