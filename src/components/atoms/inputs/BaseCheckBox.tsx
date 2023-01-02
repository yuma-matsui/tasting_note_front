import { FC, memo } from 'react'

import { BaseCheckBoxProps } from '../../../types'

const BaseCheckBox: FC<BaseCheckBoxProps> = memo(
  ({ type, id, label, name, onChange, checked, disabled = false, text }) => (
    <label
      htmlFor={id}
      style={{
        opacity: disabled ? 0.5 : 1
      }}
    >
      <input type={type} name={name} id={id} value={label} onChange={onChange} checked={checked} disabled={disabled} />
      {text ?? label}
    </label>
  )
)

export default BaseCheckBox
