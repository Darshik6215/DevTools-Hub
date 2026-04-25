'use client'

import { useState } from 'react'

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
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600">
          Have questions or feedback? We'd love to hear from you!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>

            {submitted && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span>📧</span> Email
                </h3>
                <p className="text-gray-600">support@devtoolshub.com</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span>💬</span> Response Time
                </h3>
                <p className="text-gray-600">We typically respond within 24-48 hours</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span>🌐</span> Social Media
                </h3>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-600 hover:underline">Twitter</a>
                  <a href="#" className="text-blue-600 hover:underline">GitHub</a>
                  <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold mb-3">Frequently Asked Questions</h3>
            <p className="text-sm text-gray-700 mb-3">
              Before contacting us, check our FAQ section for quick answers to common questions.
            </p>
            <a href="/#faq" className="text-blue-600 hover:underline font-semibold">
              View FAQ →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
