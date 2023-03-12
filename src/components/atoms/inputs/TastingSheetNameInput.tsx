import { FC, memo } from 'react'
import { FormRegisterAndErrors } from '../../../types'

const TastingSheetNameInput: FC<FormRegisterAndErrors> = memo(({ register, errors }) => (
  <div>
    <label htmlFor="name">
      シート名
      <input type="text" id="name" className="block" {...register('tastingSheet.name', { required: true })} />
    </label>
    {errors && (
      <p>
        <span>シート名を入力してください</span>
      </p>
    )}
  </div>
))

export default TastingSheetNameInput
