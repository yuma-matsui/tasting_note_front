import { FC, memo } from 'react'

import { useTastingSheetUpdateForm } from '../../../hooks'
import { TastingSheetApi } from '../../../types'
import { TastingSheetNameInput } from '../../atoms'

const UpdateSheetNameForm: FC<{
  tastingSheet: TastingSheetApi
}> = memo(({ tastingSheet }) => {
  const { register, handleSubmit, isValid, isSubmitting, errors, onSubmit } = useTastingSheetUpdateForm(tastingSheet)

  return (
    <form className="flex" onSubmit={handleSubmit(onSubmit)}>
      <TastingSheetNameInput register={register} errors={errors} />
      <input type="submit" value="更新" disabled={isSubmitting || !isValid} className="btn" />
    </form>
  )
})

export default UpdateSheetNameForm
