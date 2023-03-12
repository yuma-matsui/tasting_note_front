import { Dispatch, FC, memo, SetStateAction, useRef } from 'react'

import { useTastingSheetForm, useToastContext, useUpdateTastingSheetName } from '../../../hooks'
import { FormControllerButton, TastingSheetNameInput } from '../../atoms'

const UpdateSheetNameForm: FC<{ setIsEditing: Dispatch<SetStateAction<boolean>> }> = memo(({ setIsEditing }) => {
  const { register, errors, handleSubmit, onSubmit, isValid, isSubmitting, getValues } = useTastingSheetForm()
  const { updateSheetName } = useUpdateTastingSheetName()
  const { showToast } = useToastContext()

  const updateRef = useRef<HTMLInputElement>(null)

  const onClickUpdate = async () => {
    updateRef.current?.click()

    try {
      await updateSheetName(getValues('tastingSheet'))
    } catch (e) {
      if (e instanceof Error) throw e
    } finally {
      setIsEditing(false)
      showToast('テイスティグシート名を変更しました。')
    }
  }

  return (
    <form className="flex" onSubmit={handleSubmit(onSubmit)}>
      <TastingSheetNameInput register={register} errors={errors} />
      <FormControllerButton value="更新" disabled={!isValid || isSubmitting} onClick={onClickUpdate} />
      <input type="submit" hidden ref={updateRef} />
    </form>
  )
})

export default UpdateSheetNameForm
