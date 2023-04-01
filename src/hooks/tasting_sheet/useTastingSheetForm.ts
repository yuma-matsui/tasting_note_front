import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { TastingSheet, TastingSheetAllName, TastingSheetFormState } from '../../types'
import { initialTastingSheet, isFlavorName } from '../../utils'

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

  const lessThanTwoItems = (name: TastingSheetAllName) => {
    if (isFlavorName(name)) return errors?.flavor !== undefined && errors.flavor[name] !== undefined
    if (name === 'appearanceColors' || name === 'appearanceImpressions')
      return errors?.appearance !== undefined && errors.appearance[name] !== undefined
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
    errors,
    tastingSheet
  }
}

export default useTastingSheetForm
