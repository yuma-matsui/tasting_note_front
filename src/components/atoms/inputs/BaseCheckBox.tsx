import { FC, memo } from 'react'

import { BaseCheckBoxProps } from '../../../types'

const BaseCheckBox: FC<BaseCheckBoxProps> = memo(({ label, name, onChange, checked, disabled }) => (
  <label
    htmlFor={label}
    style={{
      opacity: disabled ? 0.5 : 1
    }}
  >
    <input
      type="checkbox"
      name={name}
      id={label}
      value={label}
      onChange={onChange}
      checked={checked}
      disabled={disabled}
    />
    {label}
  </label>
))

export default BaseCheckBox
