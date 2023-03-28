import { ChangeEvent, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'

import { ALCOHOL_PERCENTAGES, COUNTRIES, GRAPES_RED, GRAPES_WHITE, VINTAGES } from '../assets'
import { TastingSheetStateForWine, WineApi, WineFormState } from '../types'
import usePostWine from './api/usePostWine'
import usePostWineImageToS3 from './api/usePostWineImageToS3'
import useUpdateWine from './api/useUpdateWine'

const useWineForm = (wine?: WineApi) => {
  const location = useLocation()
  const { id: tastingSheetId, name: tastingSheetName, color } = location.state as TastingSheetStateForWine

  const getGrapes = () => {
    if (wine) return GRAPES_RED.includes(wine.grape) ? GRAPES_RED : GRAPES_WHITE
    return color === 'red' ? GRAPES_RED : GRAPES_WHITE
  }

  const { posting, postWine } = usePostWine()
  const { updating, updateWine } = useUpdateWine()
  const { posting: imagePosting, postWineImageToS3 } = usePostWineImageToS3()

  const {
    register,
    handleSubmit,
    setValue,
    formState: {
      isValid,
      isSubmitting,
      errors: { wine: errors }
    }
  } = useForm<WineFormState>({
    defaultValues: {
      wine: wine ?? {
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

  const [imageFile, setImageFile] = useState<File | null>(null)
  const onChangeImageFile = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    if (files && files[0]) {
      setImageFile(files[0])
      setValue('wine.image', files[0].name)
    }
  }

  const onSubmit: SubmitHandler<WineFormState> = async (data) => {
    try {
      if (data.wine.image && imageFile) await postWineImageToS3(imageFile)
      if (wine) await updateWine(data.wine, wine.id)
      if (!wine) await postWine(data.wine)
    } catch (e) {
      if (e instanceof Error) throw e
    }
  }

  const selectBoxOptions = {
    vintages: VINTAGES,
    countries: COUNTRIES,
    alcoholPercentages: ALCOHOL_PERCENTAGES,
    grapes: getGrapes()
  }

  return {
    register,
    onSubmit,
    handleSubmit,
    isValid,
    isSubmitting,
    errors,
    tastingSheetName,
    tastingSheetId,
    selectBoxOptions,
    requesting: posting || updating || imagePosting,
    imageFile,
    onChangeImageFile
  }
}

export default useWineForm
