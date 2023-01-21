import { FC, memo } from 'react'

import { FormControllerButtonProps } from '../../../types'

const FormControllerButton: FC<FormControllerButtonProps> = memo(({ value, disabled, onClick }) => (
  <input type="button" value={value} disabled={disabled} onClick={onClick} className="btn" />
))

export default FormControllerButton
