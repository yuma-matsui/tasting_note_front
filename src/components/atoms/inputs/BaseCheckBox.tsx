import { FC, memo } from 'react'

import { BaseCheckBoxProps } from '../../../types'

const BaseCheckBox: FC<BaseCheckBoxProps> = memo(({ type, label, name, onChange, checked, disabled = false, text }) => (
  <label
    htmlFor={label}
    style={{
      opacity: disabled ? 0.5 : 1
    }}
  >
    <input type={type} name={name} id={label} value={label} onChange={onChange} checked={checked} disabled={disabled} />
    {text ?? label}
  </label>
))

export default BaseCheckBox
