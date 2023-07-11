import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { TastingSheet, TastingSheetFormState } from '../../types'
import { initialTastingSheet } from '../../utils'

const useTastingSheetForm = () => {
  const [tastingSheet, setTastingSheet] = useState<TastingSheet>({
    ...initialTastingSheet
  })

  const {
    formState: {
      errors: { tastingSheet: errors },
      isSubmitting,
      isValid
    },
    getValues,
    handleSubmit,
    register,
    setValue,
    watch
  } = useForm<TastingSheetFormState>({
    defaultValues: {
      tastingSheet: initialTastingSheet
    },
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<TastingSheetFormState> = (data) => {
    setTastingSheet((prev) => ({ ...prev, ...data.tastingSheet }))
  }

  useEffect(() => {
    setValue('tastingSheet', { ...tastingSheet })
  }, [setValue, tastingSheet])

  return {
    errors,
    getValues,
    handleSubmit,
    isSubmitting,
    isValid,
    onSubmit,
    register,
    tastingSheet,
    watchedSheet: watch().tastingSheet
  }
}

export default useTastingSheetForm
