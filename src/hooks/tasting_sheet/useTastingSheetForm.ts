import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { TastingSheet } from '../../types'
import { initialTastingSheet } from '../../utils'

const useTastingSheetForm = () => {
  const [tastingSheet, setTastingSheet] = useState<TastingSheet>(initialTastingSheet)

  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitting, errors }
  } = useForm<TastingSheet>({
    defaultValues: initialTastingSheet,
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<TastingSheet> = (data) => {
    setTastingSheet((prev) => ({ ...prev, ...data }))
  }

  return {
    register,
    handleSubmit,
    isValid,
    isSubmitting,
    onSubmit,
    errors,
    tastingSheet
  }
}

export default useTastingSheetForm
