import ToolLayout from '@/components/ToolLayout'
import AdComponent from '@/components/AdComponent'
import SlaCalculator from '@/components/tools/SlaCalculator'
import Link from 'next/link'

export const metadata = {
  title: 'SLA Uptime Calculator Online | Calculate Downtime for 99.9%, 99.99% Uptime',
  description: 'Calculate allowed downtime based on SLA uptime percentages like 99.9%, 99.99%, and 99.999%. Free online SLA downtime calculator tool for DevOps engineers.',
  keywords: ['uptime calculator', 'SLA downtime calculator', '99.9 uptime downtime', 'SLA calculator online', 'uptime percentage calculator'],
}

const faqs = [
  {
    q: 'What is SLA uptime?',
    a: 'SLA (Service Level Agreement) uptime is a contractual guarantee from a service provider that their system will be available for a specified percentage of time. For example, 99.9% uptime means the service can only be down for about 8.7 hours per year.'
  },
  {
    q: 'How is downtime calculated from uptime percentage?',
    a: 'The formula is: Downtime = (1 - Uptime%) × Total Time. For example, 99.9% uptime over a year = (1 - 0.999) × 31,536,000 seconds = 31,536 seconds ≈ 8.76 hours of allowed downtime.'
  },
  {
    q: 'What is the difference between 99.9% and 99.99% uptime?',
    a: '99.9% (Three Nines) allows ~8.76 hours of downtime per year, while 99.99% (Four Nines) allows only ~52.6 minutes. The jump from three to four nines significantly reduces allowed downtime and typically requires more robust infrastructure.'
  },
  {
    q: 'Why does SLA matter in DevOps?',
    a: 'SLAs directly impact business reputation, revenue, and customer trust. DevOps teams use uptime targets to design resilient systems with appropriate redundancy, failover, and monitoring strategies.'
  }
]

export default function SlaUptimeCalculatorPage() {
  return (
    <ToolLayout
      title="SLA Uptime Calculator"
      description="Calculate allowed downtime for any SLA uptime percentage — instantly."
    >
      {/* Top Ad */}
      <div className="mb-10">
        <AdComponent size="leaderboard" />
      </div>

      {/* Tool */}
      <SlaCalculator />

      {/* Middle Ad */}
      <div className="my-12">
        <AdComponent size="rectangle" />
      </div>

      {/* SEO Content */}
      <div className="mt-16 space-y-12 reveal">

        <section>
          <h2 className="text-3xl font-black text-text-primary uppercase tracking-tight mb-4">What is SLA Uptime?</h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            A <strong className="text-text-primary">Service Level Agreement (SLA)</strong> defines the minimum level of service a provider commits to delivering. The <strong className="text-text-primary">uptime percentage</strong> is one of the most critical metrics — it specifies the fraction of time a service is guaranteed to be operational. A 99.9% SLA, often called &quot;Three Nines,&quot; may sound impressive, but our <strong className="text-text-primary">SLA uptime calculator</strong> quickly reveals it still allows nearly 9 hours of downtime every year.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Understanding your SLA is essential for both service providers designing resilient infrastructure and customers negotiating contracts. Our <strong className="text-text-primary">uptime calculator</strong> makes it easy to instantly convert any uptime percentage into concrete downtime figures across daily, weekly, monthly, and yearly periods.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-black text-text-primary uppercase tracking-tight mb-4">How to Calculate SLA Downtime</h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            The formula behind our <strong className="text-text-primary">SLA downtime calculator</strong> is straightforward:
          </p>
          <div className="bg-bg-secondary border border-border rounded-2xl p-6 font-mono text-primary text-center text-lg font-bold mb-4">
            Downtime = (1 − Uptime%) × Total Period
          </div>
          <p className="text-text-secondary leading-relaxed">
            For example, to calculate <strong className="text-text-primary">99.9% uptime downtime</strong> over a year: (1 − 0.999) × 31,536,000 seconds = 31,536 seconds = approximately 8 hours and 45 minutes. This tool does all that math instantly, breaking results down into days, hours, minutes, and seconds for maximum clarity.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-black text-text-primary uppercase tracking-tight mb-6">Uptime Tiers Explained</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { tier: 'Two Nines',  pct: '99%',     year: '87.6 hrs', month: '7.2 hrs',  color: 'border-red-500/40 bg-red-500/5' },
              { tier: 'Three Nines', pct: '99.9%',  year: '8.76 hrs', month: '43.8 min', color: 'border-yellow-500/40 bg-yellow-500/5' },
              { tier: 'Four Nines', pct: '99.99%',  year: '52.6 min', month: '4.38 min', color: 'border-blue-500/40 bg-blue-500/5' },
              { tier: 'Five Nines', pct: '99.999%', year: '5.26 min', month: '26.3 sec', color: 'border-green-500/40 bg-green-500/5' },
            ].map(r => (
              <div key={r.tier} className={`p-5 rounded-2xl border ${r.color}`}>
                <div className="text-xs font-black uppercase tracking-widest text-text-secondary mb-1">{r.tier}</div>
                <div className="text-2xl font-black text-text-primary mb-3">{r.pct}</div>
                <div className="text-sm text-text-secondary space-y-1">
                  <div>📅 /year: <span className="text-text-primary font-bold">{r.year}</span></div>
                  <div>📆 /month: <span className="text-text-primary font-bold">{r.month}</span></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-black text-text-primary uppercase tracking-tight mb-4">Why SLA Matters in DevOps</h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            For DevOps teams, SLAs are not just business contracts — they are engineering targets. Achieving Five Nines (99.999%) requires sophisticated infrastructure: redundant data centres, automated failover, zero-downtime deployments, and continuous monitoring. Every extra &quot;nine&quot; exponentially increases reliability requirements and operational cost.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Use this <strong className="text-text-primary">SLA uptime calculator</strong> to benchmark your current reliability, set realistic targets, and communicate downtime budgets clearly across your team. Combined with tools like our API Tester and Dockerfile Generator, you can design, test, and deploy systems that consistently meet their SLA targets.
          </p>
        </section>

        {/* Internal Links */}
        <div className="p-10 bg-bg-secondary rounded-[2.5rem] border border-border shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />
          <h3 className="text-2xl font-black mb-8 text-text-primary uppercase tracking-tight">Related DevOps Tools</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { href: '/api-tester',          icon: '🧪', title: 'API Tester',           desc: 'Test REST APIs like Postman in your browser.' },
              { href: '/dockerfile-generator', icon: '🐳', title: 'Dockerfile Generator', desc: 'Create optimized Docker configurations instantly.' },
              { href: '/hash-generator',       icon: '🔐', title: 'Hash Generator',       desc: 'Generate MD5, SHA-256, SHA-512 checksums.' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="group block p-6 bg-card-bg rounded-2xl border border-border hover:border-primary transition-all hover:-translate-y-2">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{l.icon}</div>
                <h4 className="font-bold text-text-primary group-hover:text-primary mb-2">{l.title}</h4>
                <p className="text-xs text-text-secondary leading-relaxed">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-20 reveal">
        <h2 className="text-4xl font-black mb-12 text-center text-text-primary tracking-tight">Common Questions</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card-bg p-8 rounded-3xl border border-border hover:border-primary/50 transition-all group shadow-lg">
              <h3 className="text-lg font-bold mb-4 text-text-primary group-hover:text-primary transition-colors flex items-start gap-3">
                <span className="text-primary shrink-0">Q:</span> {faq.q}
              </h3>
              <p className="text-text-secondary leading-relaxed text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Ad */}
      <div className="mt-20">
        <AdComponent size="leaderboard" />
      </div>
    </ToolLayout>
  )
}
