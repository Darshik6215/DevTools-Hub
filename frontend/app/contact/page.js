'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission (integrate with backend or email service)
    console.log('Form submitted:', formData)
    setSubmitted(true)
    
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12 reveal">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-xl text-text-secondary">
          Have questions or feedback? We&apos;d love to hear from you!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="reveal reveal-delay-1">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-text-primary">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-text-primary">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2 text-text-primary">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-text-primary">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-bg-secondary border border-border text-text-primary rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-all shadow-lg transform active:scale-95"
            >
              Send Message
            </button>

            {submitted && (
              <div className="p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-500 font-medium reveal">
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>

        {/* Contact Information */}
        <div className="reveal reveal-delay-2">
          <div className="bg-bg-secondary rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-6 text-text-primary font-outfit">Get in Touch</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2 text-text-primary">
                  <span>📧</span> Email
                </h3>
                <p className="text-text-secondary">support@devtoolskit.co.in</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2 text-text-primary">
                  <span>💬</span> Response Time
                </h3>
                <p className="text-text-secondary">We typically respond within 24-48 hours</p>
              </div>


            </div>
          </div>

          <div className="mt-8 p-6 bg-bg-primary rounded-2xl border border-border reveal">
            <h3 className="font-bold text-text-primary mb-3">Frequently Asked Questions</h3>
            <p className="text-sm text-text-secondary mb-4">
              Before contacting us, check our FAQ section for quick answers to common questions.
            </p>
            <Link href="/#faq" className="text-primary hover:underline font-bold flex items-center gap-1 group">
              View FAQ <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
