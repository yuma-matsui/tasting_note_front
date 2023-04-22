import { FC, memo } from 'react'

import { TastingSheet } from '../../../types'
import { useGetButtonClassName } from '../../../hooks'

const FormControllerButton: FC<{
  value: string
  disabled: boolean
  onClick: () => void
  tastingSheet: TastingSheet
}> = memo(({ value, disabled, onClick, tastingSheet }) => {
  const { className } = useGetButtonClassName(tastingSheet, value, disabled)

  return <input type="button" value={value} disabled={disabled} onClick={onClick} className={className} />
})

export default FormControllerButton
