import { ChangeEvent, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import { useErrorBoundary } from 'react-error-boundary'

import { ALCOHOL_PERCENTAGES, COUNTRIES, GRAPES_RED, GRAPES_WHITE, VINTAGES } from '../assets'
import { TastingSheetStateForWine, WineApi, WineColor, WineFormState } from '../types'
import usePostWine from './api/usePostWine'
import usePostWineImageToS3 from './api/usePostWineImageToS3'
import useUpdateWine from './api/useUpdateWine'
import useAuthContext from './context/useAuthContext'
import useGetButtonClassName from './useGetButtonClassName'

const useWineForm = (wine?: WineApi) => {
  const { showBoundary } = useErrorBoundary()
  const location = useLocation()
  const { id, color } = location.state as TastingSheetStateForWine
  const tastingSheetId = wine?.tastingSheetId ?? id

  const getGrapes = () => {
    if (wine) return GRAPES_RED.includes(wine.grape) ? GRAPES_RED : GRAPES_WHITE
    return color === 'red' ? GRAPES_RED : GRAPES_WHITE
  }

  const getWineColor = () => {
    let wineColor: WineColor = 'white'
    if (wine && GRAPES_RED.includes(wine.grape)) wineColor = 'red'
    return wineColor
  }

  const { postWine } = usePostWine()
  const { updateWine } = useUpdateWine()
  const { postWineImageToS3 } = usePostWineImageToS3()

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

  const disabled = isSubmitting || !isValid
  const { className: submitButtonClassName } = useGetButtonClassName(color ?? getWineColor(), disabled)

  const { currentUser } = useAuthContext()
  const [imageFile, setImageFile] = useState<File | null>(null)
  const onChangeImageFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!currentUser) return

    const { files } = e.target
    if (files && files[0]) {
      const file = files[0]
      setImageFile(file)
      setValue('wine.image', `${currentUser.uid}-${file.name}`)
    }
  }

  const onSubmit: SubmitHandler<WineFormState> = async (data) => {
    try {
      if (data.wine.image && imageFile) await postWineImageToS3(imageFile, data.wine.image)
      if (wine) await updateWine(data.wine, wine.id)
      if (!wine) await postWine(data.wine)
    } catch (e) {
      if (e instanceof Error) showBoundary(e)
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
    disabled,
    errors,
    tastingSheetId,
    selectBoxOptions,
    imageFile,
    onChangeImageFile,
    submitButtonClassName
  }
}

export default useWineForm
