/**
 * AdComponent - Reusable Advertisement Component
 * Production-ready with actual AdSense integration
 * Fixed: Prevents duplicate ad initialization
 */
'use client'

import { useEffect, useRef } from 'react'

export default function AdComponent({ size = 'banner', className = '' }) {
  const adRef = useRef(null)
  const isAdPushed = useRef(false)

  useEffect(() => {
    // Only push ads once per component instance
    if (!isAdPushed.current && adRef.current) {
      try {
        if (typeof window !== 'undefined' && window.adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({})
          isAdPushed.current = true
        }
      } catch (err) {
        console.error('AdSense error:', err)
      }
    }
  }, [])

  const adConfig = {
    banner: {
      width: '728',
      height: '90',
      slot: '1234567890', // Replace with your ad slot
      format: 'horizontal',
      className: 'h-24'
    },
    leaderboard: {
      width: '728',
      height: '90',
      slot: '1234567891', // Replace with your ad slot
      format: 'horizontal',
      className: 'h-24'
    },
    rectangle: {
      width: '300',
      height: '250',
      slot: '1234567892', // Replace with your ad slot
      format: 'rectangle',
      className: 'h-64'
    },
    sidebar: {
      width: '160',
      height: '600',
      slot: '1234567893', // Replace with your ad slot
      format: 'vertical',
      className: 'h-96'
    },
    mobile: {
      width: '320',
      height: '50',
      slot: '1234567894', // Replace with your ad slot
      format: 'horizontal',
      className: 'h-16'
    }
  }

  const config = adConfig[size] || adConfig.banner

  return (
    <div className={`ad-container flex justify-center ${className}`}>
      {/* Development Placeholder - Shows in development mode */}
      {process.env.NODE_ENV === 'development' ? (
        <div className={`bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 rounded-lg ${config.className} flex items-center justify-center w-full max-w-3xl`}>
          <div className="text-center">
            <p className="text-gray-500 text-sm font-medium">📢 Advertisement Space</p>
            <p className="text-gray-400 text-xs mt-1">{config.width}x{config.height}</p>
            <p className="text-gray-400 text-xs mt-1">({size})</p>
          </div>
        </div>
      ) : (
        /* Production AdSense Code */
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-8753660169522921"
          data-ad-slot={config.slot}
          data-ad-format={config.format}
          data-full-width-responsive="true"
        />
      )}
    </div>
  )
}


