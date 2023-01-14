import { SubmitHandler, useForm } from 'react-hook-form'

import { TastingSheet } from '../../types'
import useTastingSheetContext from './useTastingSheetContext'

const useTastingSheetForm = () => {
  const { tastingSheet, setTastingSheet } = useTastingSheetContext()

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { isValid, isSubmitting, errors }
  } = useForm<TastingSheet>({
    defaultValues: tastingSheet,
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
    getValues,
    watch,
    errors
  }
}

export default useTastingSheetForm
