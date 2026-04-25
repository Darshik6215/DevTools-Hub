/**
 * Client-Side Tools (No Backend Required)
 * All processing happens in browser
 */

/**
 * Format JSON on client-side
 */
export function formatJSONClient(jsonString) {
  try {
    const parsed = JSON.parse(jsonString)
    const formatted = JSON.stringify(parsed, null, 2)
    return { formatted, valid: true }
  } catch (error) {
    throw new Error(`Invalid JSON: ${error.message}`)
  }
}

/**
 * Generate password on client-side
 */
export function generatePasswordClient(options) {
  const {
    length = 16,
    include_uppercase = true,
    include_lowercase = true,
    include_numbers = true,
    include_symbols = true
  } = options

  let characters = ''
  if (include_uppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  if (include_lowercase) characters += 'abcdefghijklmnopqrstuvwxyz'
  if (include_numbers) characters += '0123456789'
  if (include_symbols) characters += '!@#$%^&*()_+-=[]{}|;:,.<>?'

  if (!characters) {
    throw new Error('At least one character type must be selected')
  }

  // Use crypto.getRandomValues for secure random
  const array = new Uint32Array(length)
  crypto.getRandomValues(array)
  
  let password = ''
  for (let i = 0; i < length; i++) {
    password += characters[array[i] % characters.length]
  }

  return { password }
}
