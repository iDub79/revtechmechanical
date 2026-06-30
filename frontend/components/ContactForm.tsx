'use client'
import { useState, useRef } from 'react'
import { Loader2, CheckCircle2, AlertCircle, Send } from 'lucide-react'

interface FormState {
  name: string
  email: string
  phone: string
  message: string
  website: string // honeypot
}

const initialForm: FormState = { name: '', email: '', phone: '', message: '', website: '' }

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [serverError, setServerError] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required.'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!form.message.trim()) newErrors.message = 'Message is required.'
    if (form.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('loading')
    setServerError('')

    try {
      const res = await fetch(`/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim().toLowerCase(),
          phone: form.phone.trim(),
          message: form.message.trim(),
          website: form.website, // honeypot — real users leave this blank
        }),
      })

      if (res.ok) {
        setStatus('success')
        setForm(initialForm)
      } else {
        const data = await res.json().catch(() => ({}))
        setServerError(data?.error || 'Something went wrong. Please try again or call us directly.')
        setStatus('error')
      }
    } catch {
      setServerError('Unable to reach the server. Please try again or call us on (07) 3355 2248.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl p-10 border border-gray-100 text-center shadow-sm">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-[#111111] mb-2">Message Sent!</h3>
        <p className="text-gray-500 mb-6">
          Thanks for getting in touch. We'll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm text-[#E61515] hover:underline font-medium"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6"
    >
      {/* Honeypot – hidden from real users */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={handleChange}
        autoComplete="off"
        aria-hidden="true"
        tabIndex={-1}
        style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0 }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className="block text-sm font-semibold text-[#111111] mb-2">
            Full Name <span className="text-[#E61515]">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#F5F5F5] focus:bg-white text-[#111111] placeholder:text-gray-400 outline-none transition-all duration-200 focus:ring-2 ${
              errors.name
                ? 'border-red-400 focus:ring-red-200'
                : 'border-gray-200 focus:border-[#E61515] focus:ring-[#E61515]/20'
            }`}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.name}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-semibold text-[#111111] mb-2">
            Phone Number
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="0400 123 456"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-[#F5F5F5] focus:bg-white text-[#111111] placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-[#E61515] focus:ring-2 focus:ring-[#E61515]/20"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="block text-sm font-semibold text-[#111111] mb-2">
          Email Address <span className="text-[#E61515]">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#F5F5F5] focus:bg-white text-[#111111] placeholder:text-gray-400 outline-none transition-all duration-200 focus:ring-2 ${
            errors.email
              ? 'border-red-400 focus:ring-red-200'
              : 'border-gray-200 focus:border-[#E61515] focus:ring-[#E61515]/20'
          }`}
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.email}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-[#111111] mb-2">
          Message <span className="text-[#E61515]">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Describe your vehicle's issue or the service you need..."
          className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#F5F5F5] focus:bg-white text-[#111111] placeholder:text-gray-400 outline-none transition-all duration-200 focus:ring-2 resize-none ${
            errors.message
              ? 'border-red-400 focus:ring-red-200'
              : 'border-gray-200 focus:border-[#E61515] focus:ring-[#E61515]/20'
          }`}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.message}
          </p>
        )}
      </div>

      {/* Server error */}
      {status === 'error' && serverError && (
        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
          <p className="text-sm text-red-600">{serverError}</p>
        </div>
      )}

      <button
        id="contact-submit-btn"
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2 bg-[#E61515] hover:bg-[#C01010] disabled:bg-gray-300 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all duration-200 hover:shadow-lg hover:shadow-red-900/30 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:translate-y-0"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}
