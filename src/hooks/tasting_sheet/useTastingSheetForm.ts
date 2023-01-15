import { useCallback, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TastingSheetFormState } from '../../types'

import { initialTastingSheet } from '../../utils'
import useTastingSheetContext from './useTastingSheetContext'

const useTastingSheetForm = () => {
  const { tastingSheet, setTastingSheet } = useTastingSheetContext()

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { isValid, isSubmitting, errors }
  } = useForm<TastingSheetFormState>({
    defaultValues: {
      tastingSheet: initialTastingSheet
    },
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<TastingSheetFormState> = useCallback(
    (data) => {
      setTastingSheet((prev) => ({ ...prev, ...data.tastingSheet }))
    },
    [setTastingSheet]
  )

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
    errors
  }
}

export default useTastingSheetForm
