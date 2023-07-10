import { FC, memo } from 'react'
import { HiBackward, HiForward } from 'react-icons/hi2'

import { FormControllerButtonProps } from '../../../types'
import { useCheckButtonStatus, useGetButtonClassName } from '../../../hooks'

const FormControllerButton: FC<FormControllerButtonProps> = memo(({ disabled, onClick, tastingSheet, value }) => {
  const { className } = useGetButtonClassName(tastingSheet.color, disabled, value)
  const { isBack, isNext } = useCheckButtonStatus({ value })

  return (
    <button type="button" disabled={disabled} onClick={onClick} className={className}>
      <div className="flex items-center justify-center">
        {isBack && <HiBackward className="mr-2" />}
        <span>{value}</span>
        {isNext && <HiForward className="ml-2" />}
      </div>
    </button>
  )
})

export default FormControllerButton
