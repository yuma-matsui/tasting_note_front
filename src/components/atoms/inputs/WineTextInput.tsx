import { FC, memo } from 'react'
import { WineTextInputProps } from '../../../types'

const WineTextInput: FC<WineTextInputProps> = memo(({ name, errors, label, register, required }) => (
  <div className="wine-form-control">
    <label htmlFor={name} className="wine-form-label">
      <span className="wine-form-label-text">
        {label} {name !== 'wine.name' && <span className="text-slate-500 text-sm">任意</span>}
      </span>
      <input
        type="text"
        id={name}
        {...register(name, { required })}
        className="input input-sm input-bordered border-gray-700 w-full max-w-md"
      />
    </label>
    {errors && name === 'wine.name' && (
      <p>
        <span className="text-theme-red">入力必須です</span>
      </p>
    )}
  </div>
))

export default WineTextInput
