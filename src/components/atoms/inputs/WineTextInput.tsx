import { FC, memo } from 'react'
import { WineTextInputProps } from '../../../types'

const WineTextInput: FC<WineTextInputProps> = memo(({ name, label, register, required, errors }) => (
  <div className="form-control w-full max-w-md mb-4">
    <label htmlFor={name} className="label flex flex-col items-start md:items-center">
      <span className="label-text mb-2 text-left">
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
        <span className="text-theme-pink">入力必須です</span>
      </p>
    )}
  </div>
))

export default WineTextInput
