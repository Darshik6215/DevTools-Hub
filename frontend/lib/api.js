/**
 * API Client for DevTools Hub Backend
 * Handles all API calls to FastAPI backend
 */

// Get API base URL from environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

/**
 * Format and validate JSON string
 * @param {string} jsonString - Raw JSON string to format
 * @returns {Promise<{formatted: string, valid: boolean}>}
 */
export async function formatJSON(jsonString) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/json/format`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ json_string: jsonString }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.detail || 'Failed to format JSON')
    }

    return response.json()
  } catch (error) {
    console.error('API Error (formatJSON):', error)
    throw error
  }
}

/**
 * Generate secure random password
 * @param {Object} options - Password generation options
 * @param {number} options.length - Password length
 * @param {boolean} options.include_uppercase - Include uppercase letters
 * @param {boolean} options.include_lowercase - Include lowercase letters
 * @param {boolean} options.include_numbers - Include numbers
 * @param {boolean} options.include_symbols - Include symbols
 * @returns {Promise<{password: string}>}
 */
export async function generatePassword(options) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/password/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.detail || 'Failed to generate password')
    }

    return response.json()
  } catch (error) {
    console.error('API Error (generatePassword):', error)
    throw error
  }
}

/**
 * Convert image to different format
 * @param {File} file - Image file to convert
 * @param {string} format - Target format (png, jpg, webp, gif)
 * @returns {Promise<{url: string, format: string, size: number}>}
 */
export async function convertImage(file, format) {
  try {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('format', format)

    const response = await fetch(`${API_BASE_URL}/api/image/convert`, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.detail || 'Failed to convert image')
    }

    return response.json()
  } catch (error) {
    console.error('API Error (convertImage):', error)
    throw error
  }
}
