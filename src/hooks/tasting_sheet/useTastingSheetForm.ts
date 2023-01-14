import { useCallback, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TastingSheetFromState } from '../../types'

import { initialTastingSheet } from '../../utils'
import useTastingSheetContext from './useTastingSheetContext'

const useTastingSheetForm = () => {
  const { tastingSheet, setTastingSheet } = useTastingSheetContext()

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { isValid, isSubmitting, errors }
  } = useForm<TastingSheetFromState>({
    defaultValues: {
      tastingSheet: initialTastingSheet
    }
  })

  const onSubmit: SubmitHandler<TastingSheetFromState> = useCallback(
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
    watch,
    errors
  }
}

export default useTastingSheetForm
