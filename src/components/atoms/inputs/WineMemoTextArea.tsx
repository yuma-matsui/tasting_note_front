import { FC, memo } from 'react'
import { UseFormRegister } from 'react-hook-form'

import { WineFormState } from '../../../types'

const WineMemoTextArea: FC<{ register: UseFormRegister<WineFormState> }> = memo(({ register }) => (
  <div className="wine-form-control">
    <label htmlFor="wine.memo" className="wine-form-label">
      <span className="wine-form-label-text">
        メモ <span className="text-sm text-slate-500">任意</span>
      </span>
      <textarea
        id="wine.memo"
        className="textarea textarea-bordered textarea-sm w-full max-w-md border-gray-700"
        {...register('wine.memo')}
      />
    </label>
  </div>
))

export default WineMemoTextArea
