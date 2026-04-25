/**
 * Google Analytics Event Tracking
 * Track user interactions for better insights
 */

// Track custom events
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams)
  }
}

// Track tool usage
export const trackToolUsage = (toolName) => {
  trackEvent('tool_used', {
    tool_name: toolName,
    timestamp: new Date().toISOString(),
  })
}

// Track button clicks
export const trackButtonClick = (buttonName, location) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location,
  })
}

// Track page views
export const trackPageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-N7G5ZZNNRM', {
      page_path: url,
    })
  }
}

// Track errors
export const trackError = (errorMessage, errorLocation) => {
  trackEvent('error_occurred', {
    error_message: errorMessage,
    error_location: errorLocation,
  })
}

// Track conversions (e.g., tool completion)
export const trackConversion = (conversionType, value = null) => {
  trackEvent('conversion', {
    conversion_type: conversionType,
    value: value,
  })
}
