import m from 'moment';

export const required = value =>
  (value ? undefined : 'Required field')

export const minValue = min => value => value !== undefined && (value >= min) ? undefined : `Debe ser mayor o igual que ${min}`
export const maxValue = max => value => value !== undefined && (value <= max) ? undefined : `Debe ser menor o igual que ${max}`

export const beforeToday = value => value && m().isAfter(value) ? undefined : 'La fecha no puede estar en el futuro.';

export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

export const minLength = min => value =>
  value && value.trim().length < min ? `Must be ${min} characters or more` : undefined

export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9\s]/i.test(value) ? 'Only alphanumeric characters' : undefined

export const alphaNumericAndSpecial = value =>
  value && /[^a-zA-Z0-9\s!@#$%^&*)(+=.,;:_-]+$/i.test(value) ? 'Only alphanumeric or special characters' : undefined

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) ? 'Correo electrónico invalido' : undefined

export const phone = value =>
  value && !/^\d{3}-\d{3}-\d{4}$/.test(value) ? 'Invalid phone number' : undefined

export const url = value =>
  value && !/[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/i.test(value) ? 'Invalid URL' : undefined

export const compoundValidator = (validators, message) => {
  return (value) => {
    let valid = true
    for (let i = 0; i < validators.length; i++) {
      if (validators[i](value) !== undefined) {
        valid = false
        break
      }
    }
    return valid ? undefined : message
  }
}
