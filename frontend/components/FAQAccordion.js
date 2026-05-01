'use client'

import { useState } from 'react'

export default function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`bg-card-bg rounded-xl shadow-md border transition-all duration-300 overflow-hidden ${
            openIndex === index ? 'border-primary ring-1 ring-primary/20 shadow-xl' : 'border-border hover:border-primary/50'
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left group"
          >
            <h3 className={`text-lg font-bold transition-colors ${
              openIndex === index ? 'text-primary' : 'text-text-primary group-hover:text-primary'
            }`}>
              {faq.question}
            </h3>
            <span className={`text-2xl transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : 'text-text-secondary group-hover:text-primary'}`}>
              {openIndex === index ? '−' : '+'}
            </span>
          </button>
          
          <div
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pb-6 text-text-secondary leading-relaxed border-t border-border/50 pt-4">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
