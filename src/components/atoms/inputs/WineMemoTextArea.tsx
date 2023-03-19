import { FC, memo } from 'react'
import { UseFormRegister } from 'react-hook-form'

import { WineFormState } from '../../../types'

const WineMemoTextArea: FC<{ register: UseFormRegister<WineFormState> }> = memo(({ register }) => (
  <label htmlFor="wine.memo">
    メモ
    <textarea id="wine.memo" className="block" {...register('wine.memo')} />
  </label>
))

export default WineMemoTextArea
