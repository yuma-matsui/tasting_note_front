import { FC, memo } from 'react'
import { WineTextInputProps } from '../../../types'

const WineTextInput: FC<WineTextInputProps> = memo(({ name, label, register, required, errors }) => (
  <>
    <label htmlFor={name}>
      {label}
      <input type="text" className="block" id={name} {...register(name, { required })} />
    </label>
    {errors && name === 'wine.name' && (
      <p>
        <span>入力必須です</span>
      </p>
    )}
  </>
))

export default WineTextInput
