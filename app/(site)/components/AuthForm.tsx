'use client'

import { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

const VARIANT_OPTION = {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
}

type Variant = 'LOGIN' | 'REGISTER'

export default function AuthForm() {
  const [variant, setVariant] = useState<Variant>(VARIANT_OPTION.LOGIN as Variant)
  const [isLoading, setIsLoading] = useState(false)

  const toggleVariant = useCallback(() => {
    if(variant === VARIANT_OPTION.LOGIN) {
      setVariant(VARIANT_OPTION.REGISTER as Variant)
    } else {
      setVariant(VARIANT_OPTION.LOGIN as Variant)
    }
  }, [variant])

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    }
  })

  function onSubmit(data: SubmitHandler<FieldValues>) {
    setIsLoading(true)

    if (variant === VARIANT_OPTION.REGISTER) {
      // Axios Register
    }

    if (variant === VARIANT_OPTION.LOGIN) {
      // NextAuth Signin
    }
  }

  return (
    <div>AuthForm!</div>
  )
}