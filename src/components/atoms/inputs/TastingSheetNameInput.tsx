import { FC, memo } from 'react'
import { FormRegisterAndErrors } from '../../../types'

const TastingSheetNameInput: FC<FormRegisterAndErrors> = memo(({ register, errors }) => (
  <div className="form-control w-full max-w-xs my-6">
    <label htmlFor="name" className="label flex flex-col items-center">
      <span className="label-text mb-2 leading-6 self-start">シート名</span>
      <input
        type="text"
        id="name"
        placeholder="例：ボルドー/赤"
        className="input input-bordered border-gray-700 w-full max-w-xs h-8"
        {...register('tastingSheet.name', { required: true })}
      />
    </label>
    {errors && (
      <p>
        <span className="text-theme-red">シート名を入力してください</span>
      </p>
    )}
  </div>
))

export default TastingSheetNameInput
