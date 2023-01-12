import { FC, memo } from 'react'

import { BaseCheckBoxProps } from '../../../types'

const BaseCheckBox: FC<BaseCheckBoxProps> = memo(
  ({ type, id, label, name, onChange, checked, disabled = false, text, register }) => (
    <label
      htmlFor={id}
      style={{
        opacity: disabled ? 0.5 : 1
      }}
    >
      <input
        type={type}
        id={id}
        value={label}
        checked={checked}
        disabled={disabled}
        {...register(name, { onChange, required: true })}
      />
      {text ?? label}
    </label>
  )
)

export default BaseCheckBox
