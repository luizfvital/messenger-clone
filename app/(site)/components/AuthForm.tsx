'use client'

import AuthSocialButton from '@/app/(site)/components/AuthSocialButton'
import Button from '@/app/components/Button'
import Input from '@/app/components/inputs/Input'
import { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { BsGithub, BsGoogle } from 'react-icons/bs'

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
          {variant === VARIANT_OPTION.REGISTER && (
            <Input
              id="name"
              label="Name"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
          )}

          <Input
            id="email"
            label="Email address"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />

          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />

          <div>
            <Button disabled={isLoading} type="submit" fullWidth>
              {variant === VARIANT_OPTION.LOGIN ? 'Login' : 'Register'}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction('github')}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction('google')}
            />
          </div>
        </div>

        <div
          className="
          flex
          gap-2
          justify-center
          text-sm
          mt-6
          px-2
          text-gray-500
        "
        >
          <div>
            {variant === VARIANT_OPTION.LOGIN
              ? 'New to Messenger?'
              : 'Already have an account?'}
          </div>
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === VARIANT_OPTION.LOGIN ? 'Create an account' : 'Login'}
          </div>
        </div>
      </div>
    </div>
  )
}
