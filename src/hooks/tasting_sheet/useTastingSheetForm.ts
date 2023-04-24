import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { TastingSheet, TastingSheetFormState } from '../../types'
import { initialTastingSheet } from '../../utils'

const useTastingSheetForm = () => {
  const [tastingSheet, setTastingSheet] = useState<TastingSheet>({
    ...initialTastingSheet
  })

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: {
      isValid,
      isSubmitting,
      errors: { tastingSheet: errors }
    }
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
    register,
    handleSubmit,
    isValid,
    isSubmitting,
    onSubmit,
    getValues,
    errors,
    tastingSheet
  }
}

export default useTastingSheetForm
