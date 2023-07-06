import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'

type Rules = {
  [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions
}

export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email is required'
    },
    pattern: {
      value:
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
      message: 'Please enter your email in the correct format'
    },
    maxLength: {
      value: 160,
      message: 'Email has length from 5 to 100 characters'
    },
    minLength: {
      value: 5,
      message: 'Email has length from 5 to 100 characters'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password is required'
    },
    maxLength: {
      value: 160,
      message: 'Password has length from 5 to 100 characters'
    },
    minLength: {
      value: 5,
      message: 'Password has length from 5 to 100 characters'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Confirm password is required'
    },
    maxLength: {
      value: 160,
      message: 'Password has length from 5 to 100 characters'
    },
    minLength: {
      value: 5,
      message: 'Password has length from 5 to 100 characters'
    },
    validate:
      typeof getValues === 'function'
        ? (value) => value === getValues('password') || 'Please enter password again'
        : undefined
  }
})
