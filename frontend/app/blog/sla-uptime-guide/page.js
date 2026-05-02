import Link from 'next/link'

export const metadata = {
  title: 'SLA Uptime Calculator Guide - Understanding 99.9% vs 99.99% Uptime | DevTools Hub',
  description: 'Learn what SLA uptime percentages mean in practice. Understand the difference between 99.9% and 99.99% uptime, how to calculate downtime, and why SLA matters in DevOps.',
  keywords: ['SLA uptime guide', '99.9 uptime downtime', 'SLA calculator guide', 'uptime percentage explained'],
}

export default function SlaUptimeGuidePage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-12">
          <div className="text-sm text-text-secondary mb-4">Published on May 4, 2024 • 9 min read</div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            SLA Uptime Calculator Guide — Understanding 99.9% vs 99.99% Uptime
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Demystify SLA uptime percentages. Learn what Three, Four, and Five Nines mean for your systems and how to calculate allowed downtime instantly.
          </p>
        </header>

        <div className="mb-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl p-12 text-center">
          <div className="text-8xl mb-4">⏱️</div>
          <p className="text-text-secondary">SLA Uptime Calculator Tool</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">What Does SLA Uptime Mean?</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            SLA stands for <strong className="text-text-primary">Service Level Agreement</strong>. The uptime percentage in an SLA defines how reliably a service is guaranteed to be available. This number looks small in terms of percentage differences, but the real-world downtime impact is enormous.
          </p>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">The Nines — Breaking Down Uptime Tiers</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-bg-secondary">
                  <th className="p-3 text-left text-text-primary border border-border">Tier</th>
                  <th className="p-3 text-left text-text-primary border border-border">Uptime</th>
                  <th className="p-3 text-left text-text-primary border border-border">Daily</th>
                  <th className="p-3 text-left text-text-primary border border-border">Monthly</th>
                  <th className="p-3 text-left text-text-primary border border-border">Yearly</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Two Nines',  '99%',     '14.4 min',  '7.2 hrs',    '87.6 hrs'],
                  ['Three Nines','99.9%',   '1.44 min',  '43.8 min',   '8.76 hrs'],
                  ['Four Nines', '99.99%',  '8.64 sec',  '4.38 min',   '52.6 min'],
                  ['Five Nines', '99.999%', '0.864 sec', '26.3 sec',   '5.26 min'],
                ].map(([tier, pct, daily, monthly, yearly]) => (
                  <tr key={tier} className="hover:bg-bg-secondary transition-colors">
                    <td className="p-3 text-text-secondary border border-border">{tier}</td>
                    <td className="p-3 text-primary font-bold border border-border">{pct}</td>
                    <td className="p-3 text-text-secondary border border-border">{daily}</td>
                    <td className="p-3 text-text-secondary border border-border">{monthly}</td>
                    <td className="p-3 text-text-secondary border border-border">{yearly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">The Downtime Calculation Formula</h2>
          <p className="text-text-secondary mb-4 leading-relaxed">
            The core formula is simple:
          </p>
          <div className="bg-bg-secondary border border-border rounded-lg p-6 font-mono text-primary text-center text-lg font-bold mb-6">
            Downtime = (1 − Uptime%) × Total Period Seconds
          </div>
          <p className="text-text-secondary mb-6 leading-relaxed">
            For example, 99.9% uptime over a year: (1 − 0.999) × 31,536,000 = 31,536 seconds = 8 hours, 45 minutes, and 36 seconds of allowed downtime per year.
          </p>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Why SLA Matters for DevOps Teams</h2>
          <p className="text-text-secondary mb-4 leading-relaxed">
            SLA targets drive engineering decisions. Achieving Five Nines requires automated failover, redundant infrastructure, chaos engineering, and mature on-call processes. Understanding the gap between different tiers helps teams make informed architectural decisions.
          </p>
          <ul className="text-text-secondary space-y-2 mb-6">
            <li>✅ <strong className="text-text-primary">Capacity planning:</strong> Know how much redundancy you need.</li>
            <li>✅ <strong className="text-text-primary">Incident budgets:</strong> Communicate downtime budgets clearly to stakeholders.</li>
            <li>✅ <strong className="text-text-primary">Vendor evaluation:</strong> Compare cloud providers using real downtime numbers.</li>
            <li>✅ <strong className="text-text-primary">Contract negotiation:</strong> Ensure SLAs align with actual business requirements.</li>
          </ul>

          <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-center mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">Try the SLA Uptime Calculator</h3>
            <p className="text-white/90 mb-6">Calculate allowed downtime for any uptime percentage, instantly.</p>
            <Link href="/sla-uptime-calculator" className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:opacity-90 transition-all shadow-lg">
              Open Calculator →
            </Link>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-12">
          <h3 className="text-2xl font-bold text-text-primary mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/dockerfile-generator-guide" className="block bg-card-bg rounded-xl p-6 border border-border hover:border-primary transition-colors">
              <div className="text-3xl mb-3">🐳</div>
              <h4 className="text-lg font-bold text-text-primary mb-2">Dockerfile Generator Guide</h4>
              <p className="text-text-secondary text-sm">Build resilient, containerized deployments</p>
            </Link>
            <Link href="/blog/api-testing-complete-guide" className="block bg-card-bg rounded-xl p-6 border border-border hover:border-primary transition-colors">
              <div className="text-3xl mb-3">🧪</div>
              <h4 className="text-lg font-bold text-text-primary mb-2">API Testing Complete Guide</h4>
              <p className="text-text-secondary text-sm">Validate your APIs and verify SLA performance</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
