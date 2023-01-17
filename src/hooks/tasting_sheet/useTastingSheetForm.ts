import { useCallback, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TastingSheetAllName, TastingSheetFormState } from '../../types'

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

  const lessThanTwoItems = (name: TastingSheetAllName) => {
    switch (name) {
      case 'appearanceColor':
      case 'appearanceImpression':
        return errors.tastingSheet?.appearance !== undefined && errors.tastingSheet.appearance[name] !== undefined
      case 'flavorFirstImpression':
      case 'flavorFruit':
      case 'flavorFlower':
      case 'flavorSpice':
      case 'flavorImpression':
        return errors.tastingSheet?.flavor !== undefined && errors.tastingSheet.flavor[name] !== undefined
      default:
        return false
    }
  }

  return {
    register,
    handleSubmit,
    isValid,
    isSubmitting,
    onSubmit,
    getValues,
    lessThanTwoItems
  }
}

export default useTastingSheetForm
