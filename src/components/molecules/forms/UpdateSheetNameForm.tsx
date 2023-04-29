import { FC, memo } from 'react'

import { useGetButtonClassName, useTastingSheetUpdateForm } from '../../../hooks'
import { TastingSheetApi } from '../../../types'
import { TastingSheetNameInput } from '../../atoms'

const UpdateSheetNameForm: FC<{
  tastingSheet: TastingSheetApi
}> = memo(({ tastingSheet }) => {
  const { register, handleSubmit, isValid, isSubmitting, errors, onSubmit } = useTastingSheetUpdateForm(tastingSheet)
  const disabled = isSubmitting || !isValid
  const { className } = useGetButtonClassName(tastingSheet.color, disabled)
  const buttonMargin = errors ? 'mt-1' : 'mt-7'

  return (
    <form className="flex justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
      <TastingSheetNameInput register={register} errors={errors} />
      <input type="submit" value="更新" disabled={disabled} className={`${className} ${buttonMargin} ml-2 h-fit`} />
    </form>
  )
})

export default UpdateSheetNameForm
