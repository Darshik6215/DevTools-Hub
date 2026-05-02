'use client'

import { useState, useEffect, useCallback } from 'react'

// Time periods in seconds
const TIME_PERIODS = {
  Daily:   { label: 'Daily',   seconds: 86400 },
  Weekly:  { label: 'Weekly',  seconds: 604800 },
  Monthly: { label: 'Monthly', seconds: 2592000 },   // 30 days
  Yearly:  { label: 'Yearly',  seconds: 31536000 },  // 365 days
}

// Preset SLA levels
const PRESETS = [
  { label: '99%',     value: 99 },
  { label: '99.9%',   value: 99.9 },
  { label: '99.99%',  value: 99.99 },
  { label: '99.999%', value: 99.999 },
]

/**
 * Convert total seconds into days, hours, minutes, seconds
 */
function breakdownSeconds(totalSeconds) {
  const days    = Math.floor(totalSeconds / 86400)
  const hours   = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = Math.floor(totalSeconds % 60)
  return { days, hours, minutes, seconds }
}

/**
 * Format a number cleanly — strip trailing zeros from decimals
 */
function fmt(n) {
  return n % 1 === 0 ? n.toString() : n.toFixed(2).replace(/\.?0+$/, '')
}

export default function SlaCalculator() {
  const [uptime, setUptime]       = useState('99.9')
  const [period, setPeriod]       = useState('Yearly')
  const [result, setResult]       = useState(null)
  const [copied, setCopied]       = useState(false)
  const [inputError, setInputError] = useState('')

  // Core calculation
  const calculate = useCallback(() => {
    const pct = parseFloat(uptime)
    if (isNaN(pct) || pct < 0 || pct > 100) {
      setInputError('Enter a value between 0 and 100')
      setResult(null)
      return
    }
    setInputError('')
    const totalSeconds   = TIME_PERIODS[period].seconds
    const downtimeSec    = ((100 - pct) / 100) * totalSeconds
    const uptimeSec      = totalSeconds - downtimeSec
    setResult({
      downtime: breakdownSeconds(downtimeSec),
      uptimeSec,
      downtimeSec,
      totalSec: totalSeconds,
    })
  }, [uptime, period])

  // Recalculate on every input change
  useEffect(() => { calculate() }, [calculate])

  // Copy results to clipboard
  const handleCopy = async () => {
    if (!result) return
    const { days, hours, minutes, seconds } = result.downtime
    const text =
      `SLA Uptime Calculator — DevTools Hub\n` +
      `Uptime: ${uptime}%\nPeriod: ${period}\n\n` +
      `Allowed Downtime:\n` +
      `  Days:    ${days}\n` +
      `  Hours:   ${hours}\n` +
      `  Minutes: ${minutes}\n` +
      `  Seconds: ${seconds}`
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {}
  }

  const handleClear = () => {
    setUptime('')
    setPeriod('Yearly')
    setResult(null)
    setInputError('')
  }

  const uptimeNum = parseFloat(uptime) || 0
  const downtimePct = Math.max(0, 100 - uptimeNum)

  return (
    <div className="space-y-8">

      {/* ── Input Card ── */}
      <div className="bg-bg-secondary rounded-2xl border border-border p-6 shadow-xl space-y-6">

        {/* Preset Buttons */}
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-text-secondary mb-3">Quick Presets</p>
          <div className="flex flex-wrap gap-3">
            {PRESETS.map(p => (
              <button
                key={p.label}
                onClick={() => setUptime(String(p.value))}
                className={`px-5 py-2 rounded-xl font-black text-sm border transition-all
                  ${uptime === String(p.value)
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                    : 'bg-bg-primary border-border text-text-primary hover:border-primary hover:text-primary'}`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Uptime Input + Slider */}
        <div>
          <label className="block text-xs font-black uppercase tracking-widest text-text-secondary mb-2">
            Uptime Percentage
          </label>
          <div className="flex items-center gap-4">
            <input
              type="number"
              min="0"
              max="100"
              step="0.001"
              value={uptime}
              onChange={e => setUptime(e.target.value)}
              placeholder="e.g. 99.9"
              className={`w-36 px-4 py-3 rounded-xl bg-bg-primary border text-text-primary font-mono font-bold text-lg focus:ring-2 focus:ring-primary outline-none transition-all
                ${inputError ? 'border-red-500' : 'border-border'}`}
            />
            <span className="text-2xl font-black text-primary">%</span>
            <div className="flex-1">
              <input
                type="range"
                min="90"
                max="99.999"
                step="0.001"
                value={uptimeNum}
                onChange={e => setUptime(e.target.value)}
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-xs text-text-secondary mt-1">
                <span>90%</span><span>99.999%</span>
              </div>
            </div>
          </div>
          {inputError && <p className="mt-2 text-xs text-red-500 font-bold">{inputError}</p>}
        </div>

        {/* Time Period Selector */}
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-text-secondary mb-3">Time Period</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {Object.keys(TIME_PERIODS).map(p => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`py-3 rounded-xl font-black text-sm border transition-all
                  ${period === p
                    ? 'bg-accent text-white border-accent shadow-lg shadow-accent/20'
                    : 'bg-bg-primary border-border text-text-primary hover:border-accent hover:text-accent'}`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <button
            onClick={handleCopy}
            disabled={!result}
            className="flex-1 sm:flex-none px-6 py-3 bg-primary text-white rounded-xl font-black text-sm uppercase tracking-wider hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg shadow-primary/20"
          >
            {copied ? '✓ Copied!' : 'Copy Results'}
          </button>
          <button
            onClick={handleClear}
            className="px-6 py-3 bg-red-500/10 border border-red-500/30 text-red-500 rounded-xl font-black text-sm hover:bg-red-500 hover:text-white transition-all"
          >
            Clear
          </button>
        </div>
      </div>

      {/* ── Results Card ── */}
      <div className="bg-bg-secondary rounded-2xl border border-border shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-60" />
        <div className="p-6">
          <h3 className="text-xl font-black text-text-primary uppercase tracking-tight mb-1 flex items-center gap-2">
            <span className="text-2xl">📊</span> Allowed Downtime
          </h3>
          <p className="text-sm text-text-secondary mb-6">
            {result
              ? `For ${uptime}% uptime over a ${period.toLowerCase()} period`
              : 'Enter an uptime percentage to see results'}
          </p>

          {result ? (
            <>
              {/* Big result blocks */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'Days',    value: result.downtime.days,    color: 'text-primary' },
                  { label: 'Hours',   value: result.downtime.hours,   color: 'text-accent' },
                  { label: 'Minutes', value: result.downtime.minutes, color: 'text-green-400' },
                  { label: 'Seconds', value: result.downtime.seconds, color: 'text-yellow-400' },
                ].map(({ label, value, color }) => (
                  <div
                    key={label}
                    className="bg-bg-primary rounded-2xl border border-border p-5 text-center hover:border-primary/50 transition-all"
                  >
                    <div className={`text-4xl font-black ${color} mb-1`}>{value}</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-text-secondary">{label}</div>
                  </div>
                ))}
              </div>

              {/* Summary bar */}
              <div className="bg-bg-primary rounded-xl border border-border p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary font-bold">Total downtime (seconds)</span>
                  <span className="text-text-primary font-mono font-black">{fmt(result.downtimeSec)}s</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary font-bold">Uptime (seconds)</span>
                  <span className="text-green-400 font-mono font-black">{fmt(result.uptimeSec)}s</span>
                </div>
                {/* Visual bar */}
                <div className="mt-3 h-3 rounded-full bg-red-500/20 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-green-500 to-primary transition-all duration-500"
                    style={{ width: `${Math.min(uptimeNum, 100)}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-text-secondary pt-1">
                  <span className="text-green-400 font-bold">▮ Uptime {uptime}%</span>
                  <span className="text-red-400 font-bold">▮ Downtime {fmt(downtimePct)}%</span>
                </div>
              </div>
            </>
          ) : (
            <div className="py-16 text-center opacity-20">
              <div className="text-8xl mb-4">⏱️</div>
              <p className="font-bold text-lg">Waiting for input…</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
