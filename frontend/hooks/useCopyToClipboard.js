import { useState, useCallback } from 'react'

// Main hook implementation
function useCopyToClipboardHook() {
  const [copiedText, setCopiedText] = useState('')

  const copyToClipboard = useCallback(async (text, identifier = 'default') => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(identifier)
      
      // Reset after 2 seconds
      setTimeout(() => {
        setCopiedText('')
      }, 2000)
      
      return true
    } catch (err) {
      console.error('Failed to copy text: ', err)
      return false
    }
  }, [])

  const isCopied = useCallback((identifier = 'default') => {
    return copiedText === identifier
  }, [copiedText])

  // Return both formats for compatibility
  return { 
    copyToClipboard, 
    isCopied,
    copyStatus: copiedText // For new tools that use copyStatus
  }
}

// Default export (for new tools using: import useCopyToClipboard from ...)
export default useCopyToClipboardHook

// Named export (for old tools using: import { useCopyToClipboard } from ...)
export { useCopyToClipboardHook as useCopyToClipboard }