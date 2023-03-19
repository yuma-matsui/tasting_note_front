import { SubmitHandler, useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'

import { ALCOHOL_PERCENTAGES, COUNTRIES, GRAPES_RED, GRAPES_WHITE, VINTAGES } from '../assets'
import { TastingSheetStateForWine, WineFormState } from '../types'

const useWineForm = () => {
  const location = useLocation()
  const { id: tastingSheetId, name: tastingSheetName, color } = location.state as TastingSheetStateForWine

  const {
    register,
    handleSubmit,
    formState: {
      isValid,
      isSubmitting,
      errors: { wine: errors }
    }
  } = useForm<WineFormState>({
    defaultValues: {
      wine: {
        name: '',
        image: null,
        vintage: '',
        country: '',
        grape: '',
        region: null,
        alcoholPercentage: '',
        memo: null,
        tastingSheetId
      }
    },
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<WineFormState> = (data) => {
    console.log(data.wine, 'をpostします')
  }

  const selectBoxOptions = {
    vintages: VINTAGES,
    countries: COUNTRIES,
    alcoholPercentages: ALCOHOL_PERCENTAGES,
    grapes: color === 'red' ? GRAPES_RED : GRAPES_WHITE
  }

  return {
    register,
    onSubmit,
    handleSubmit,
    isValid,
    isSubmitting,
    errors,
    tastingSheetName,
    selectBoxOptions
  }
}

export default useWineForm
