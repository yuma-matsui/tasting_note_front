import { FC, memo } from 'react'

import { ModalOpenButtonProps } from '../../../types'

const ModalOpenButton: FC<ModalOpenButtonProps> = memo(({ text, id }) => (
  <label htmlFor={id} className="btn">
    {text}
  </label>
))

export default ModalOpenButton