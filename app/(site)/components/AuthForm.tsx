'use client'

import Input from '@/app/components/inputs/Input'
import { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

const VARIANT_OPTION = {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
}

type Variant = 'LOGIN' | 'REGISTER'

export default function AuthForm() {
  const [variant, setVariant] = useState<Variant>(
    VARIANT_OPTION.LOGIN as Variant,
  )
  const [isLoading, setIsLoading] = useState(false)

  const toggleVariant = useCallback(() => {
    if (variant === VARIANT_OPTION.LOGIN) {
      setVariant(VARIANT_OPTION.REGISTER as Variant)
    } else {
      setVariant(VARIANT_OPTION.LOGIN as Variant)
    }
  }, [variant])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    if (variant === VARIANT_OPTION.REGISTER) {
      // Axios Register
    }

    if (variant === VARIANT_OPTION.LOGIN) {
      // NextAuth Signin
    }
  }

  const socialAction = (action: string) => {
    setIsLoading(true)

    // NextAuth Social Signin
  }

  return (
    <div
      className="
        mt-8
        sm:mx-auto
        sm:w-full
        sm:max-w-md
      "
    >
      <div
        className="
        bg-white
        px-4
        py-8
        shadow
        sm:rounded-lg
        sm:px-10
      "
      >
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Input id="email" label="Email" register={register} errors={errors} />
        </form>
      </div>
    </div>
  )
}
