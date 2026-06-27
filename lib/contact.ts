export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validateContactForm = (
  data: Partial<ContactFormData>
): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {}

  if (!data.name?.trim()) {
    errors.name = 'Name is required'
  }

  if (!data.email?.trim()) {
    errors.email = 'Email is required'
  } else if (!validateEmail(data.email)) {
    errors.email = 'Invalid email address'
  }

  if (!data.subject?.trim()) {
    errors.subject = 'Subject is required'
  }

  if (!data.message?.trim()) {
    errors.message = 'Message is required'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}
