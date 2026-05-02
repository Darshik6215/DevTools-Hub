'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'
import AdComponent from '@/components/AdComponent'
import Breadcrumb from '@/components/Breadcrumb'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'

export default function ColorPicker() {
  const [color, setColor] = useState('#3b82f6')
  const [hexInput, setHexInput] = useState('#3b82f6')
  const { copyToClipboard, isCopied } = useCopyToClipboard()

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null
  }

  const rgbToHex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
  }

  const hexToHsl = (hex) => {
    const rgb = hexToRgb(hex)
    if (!rgb) return null
    
    const r = rgb.r / 255
    const g = rgb.g / 255
    const b = rgb.b / 255
    
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h, s, l = (max + min) / 2
    
    if (max === min) {
      h = s = 0
    } else {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
      
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break
        case g: h = ((b - r) / d + 2) / 6; break
        case b: h = ((r - g) / d + 4) / 6; break
      }
    }
    
    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100)
    }
  }

  const rgb = hexToRgb(color)
  const hsl = hexToHsl(color)

  const handleCopy = (text, id) => {
    copyToClipboard(text, id)
  }

  return (
    <ToolLayout
      title="Free Color Picker & HEX RGB Converter Online | DevTools Hub"
      description="Pick colors and convert between HEX, RGB, and HSL formats instantly. Free online color picker tool for designers and developers."
      icon="🎨"
    >
      <Breadcrumb 
        items={[
          { label: 'Color Picker', href: '/color-picker' }
        ]} 
      />

      <div className="mb-6">
        <AdComponent size="banner" />
      </div>

      <div className="bg-card-bg rounded-xl shadow-lg p-6 md:p-8 border border-border">
        {/* Color Preview */}
        <div className="mb-8">
          <div 
            className="w-full h-64 rounded-xl shadow-lg border-4 border-white mb-4"
            style={{ backgroundColor: color }}
          ></div>
          <input
            type="color"
            value={color}
            onChange={(e) => {
              setColor(e.target.value)
              setHexInput(e.target.value)
            }}
            className="w-full h-16 rounded-lg cursor-pointer"
          />
        </div>

        {/* HEX Input */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-text-primary">
              HEX Color
            </label>
            <button
              onClick={() => {
                setColor('#ff4757')
                setHexInput('#ff4757')
              }}
              className="text-sm text-primary hover:underline font-medium"
            >
              Load Sample
            </button>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={hexInput}
              onChange={(e) => setHexInput(e.target.value)}
              onBlur={() => {
                if (/^#[0-9A-F]{6}$/i.test(hexInput)) {
                  setColor(hexInput)
                }
              }}
              className="flex-1 p-3 bg-bg-primary border border-border rounded-lg text-text-primary font-mono focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={() => handleCopy(color, 'hex')}
              className={`px-4 py-2 rounded-lg transition-all ${
                isCopied('hex')
                  ? 'bg-green-500 text-white'
                  : 'bg-primary text-white hover:opacity-90'
              }`}
            >
              {isCopied('hex') ? '✅ Copied!' : '📋 Copy'}
            </button>
          </div>
        </div>

        {/* Color Formats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-bg-secondary rounded-lg p-4 border border-border">
            <div className="text-sm font-semibold text-text-secondary mb-2">RGB</div>
            <div className="font-mono text-text-primary">
              {rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : 'Invalid'}
            </div>
            <button
              onClick={() => handleCopy(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`, 'rgb')}
              className={`mt-2 text-sm transition-all ${
                isCopied('rgb')
                  ? 'text-green-500 font-semibold'
                  : 'text-primary hover:underline'
              }`}
            >
              {isCopied('rgb') ? '✅ Copied!' : 'Copy'}
            </button>
          </div>

          <div className="bg-bg-secondary rounded-lg p-4 border border-border">
            <div className="text-sm font-semibold text-text-secondary mb-2">HSL</div>
            <div className="font-mono text-text-primary">
              {hsl ? `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)` : 'Invalid'}
            </div>
            <button
              onClick={() => handleCopy(`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`, 'hsl')}
              className={`mt-2 text-sm transition-all ${
                isCopied('hsl')
                  ? 'text-green-500 font-semibold'
                  : 'text-primary hover:underline'
              }`}
            >
              {isCopied('hsl') ? '✅ Copied!' : 'Copy'}
            </button>
          </div>

          <div className="bg-bg-secondary rounded-lg p-4 border border-border">
            <div className="text-sm font-semibold text-text-secondary mb-2">HEX</div>
            <div className="font-mono text-text-primary">{color.toUpperCase()}</div>
            <button
              onClick={() => handleCopy(color, 'hex2')}
              className={`mt-2 text-sm transition-all ${
                isCopied('hex2')
                  ? 'text-green-500 font-semibold'
                  : 'text-primary hover:underline'
              }`}
            >
              {isCopied('hex2') ? '✅ Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        {/* Preset Colors */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Popular Colors</h3>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-2">
            {['#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16', '#22c55e', 
              '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9', '#3b82f6', '#6366f1',
              '#8b5cf6', '#a855f7', '#d946ef', '#ec4899', '#f43f5e', '#000000',
              '#ffffff', '#6b7280', '#ef4444', '#10b981', '#3b82f6', '#f59e0b'].map((presetColor) => (
              <button
                key={presetColor}
                onClick={() => {
                  setColor(presetColor)
                  setHexInput(presetColor)
                }}
                className="w-full aspect-square rounded-lg border-2 border-border hover:border-primary transition-all shadow-sm hover:shadow-md"
                style={{ backgroundColor: presetColor }}
                title={presetColor}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="my-8">
        <AdComponent size="leaderboard" />
      </div>

      <div className="mt-8 prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          Color Picker & Converter Tool
        </h2>
        <p className="text-text-secondary leading-relaxed mb-4">
          Our free online color picker helps you select colors and convert between HEX, RGB, and HSL formats instantly. 
          Perfect for web designers, developers, and digital artists who need quick color conversions.
        </p>
      </div>
    </ToolLayout>
  )
}
