import { useErrorBoundary } from 'react-error-boundary'
import { SubmitHandler, useForm } from 'react-hook-form'

import { TastingSheetApi, TastingSheetFormState } from '../../types'
import useUpdateTastingSheetName from '../api/useUpdateTastingSheetName'

const useTastingSheetUpdateForm = (tastingSheet: TastingSheetApi) => {
  const { showBoundary } = useErrorBoundary()

  const { updateSheetName } = useUpdateTastingSheetName()
  const {
    register,
    handleSubmit,
    formState: {
      isValid,
      isSubmitting,
      errors: { tastingSheet: errors }
    }
  } = useForm<TastingSheetFormState>({
    defaultValues: {
      tastingSheet
    },
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<TastingSheetFormState> = async (data) => {
    try {
      await updateSheetName(data.tastingSheet)
    } catch (e) {
      if (e instanceof Error) showBoundary(e)
    }
  }

  return {
    register,
    handleSubmit,
    disabled: isSubmitting || !isValid,
    errors,
    onSubmit
  }
}

export default useTastingSheetUpdateForm
