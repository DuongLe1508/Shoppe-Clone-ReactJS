import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'

type Rules = {
  [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      message: 'Password has length from 6 to 100 characters'
    },
    minLength: {
      value: 6,
      message: 'Password has length from 6 to 100 characters'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Confirm password is required'
    },
    maxLength: {
      value: 160,
      message: 'Password has length from 6 to 100 characters'
    },
    minLength: {
      value: 6,
      message: 'Password has length from 6 to 100 characters'
    },
    validate:
      typeof getValues === 'function'
        ? (value) => value === getValues('password') || 'Please enter password again'
        : undefined
  }
})

export const schema = yup
  .object({
    email: yup
      .string()
      .required('Email is required')
      .email()
      .min(6, 'Email has length from 5 to 100 characters')
      .max(160, 'Email has length from 5 to 100 characters'),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password has length from 5 to 100 characters')
      .max(160, 'Password has length from 5 to 100 characters'),
    confirm_password: yup
      .string()
      .required('Confirm password is required')
      .min(6, 'Confirm_password has length from 5 to 100 characters')
      .max(160, 'Confirm_password has length from 5 to 100 characters')
      .oneOf([yup.ref('password')], "Enter again don'\t match")
  })
  .required()

export type Schema = yup.InferType<typeof schema>
