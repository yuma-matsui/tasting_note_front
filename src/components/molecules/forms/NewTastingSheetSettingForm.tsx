import { FC, memo } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { TastingSheetSettingFormInputs } from '../../../types'
import { TastingSheetNameInput, TastingSheetSettingSubmitButton, TastingSheetTimeSelectBox } from '../../atoms'
import TastingSheetWineColorRadios from '../TastingSheetWineColorRadios'

const NewTastingSheetSettingForm: FC = memo(() => {
  const { register, handleSubmit } = useForm<TastingSheetSettingFormInputs>()
  const onSubmit: SubmitHandler<TastingSheetSettingFormInputs> = (data) => console.log(data)

  return (
    <>
      <h2>テイスティングシートの設定</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TastingSheetNameInput register={register} />
        <TastingSheetTimeSelectBox register={register} />
        <TastingSheetWineColorRadios register={register} />
        <TastingSheetSettingSubmitButton />
      </form>
    </>
  )
})

export default NewTastingSheetSettingForm
