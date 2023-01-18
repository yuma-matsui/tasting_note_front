import { useCallback, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { TastingSheetAllName, TastingSheetFormState } from '../../types'
import { initialTastingSheet, isFlavorName } from '../../utils'
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

  const lessThanTwoItems = (name: TastingSheetAllName) => {
    if (isFlavorName(name))
      return errors.tastingSheet?.flavor !== undefined && errors.tastingSheet.flavor[name] !== undefined
    if (name === 'appearanceColor' || name === 'appearanceImpression')
      return errors.tastingSheet?.appearance !== undefined && errors.tastingSheet.appearance[name] !== undefined
    return false
  }

  return {
    register,
    handleSubmit,
    isValid,
    isSubmitting,
    onSubmit,
    getValues,
    lessThanTwoItems,
    errors
  }
}

export default useTastingSheetForm
