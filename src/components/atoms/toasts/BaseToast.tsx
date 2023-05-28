import { FC, memo } from 'react'

import { BaseToastProps } from '../../../types'
import { useGetToastClassName } from '../../../hooks'

const BaseToast: FC<BaseToastProps> = memo(({ text, visible, type }) => {
  const { toastColorClass } = useGetToastClassName(type)

  if (!visible) return null

  return (
    <div className="toast toast-top toast-end">
      <div className={toastColorClass}>
        <div>
          <span className="text-white">{text}</span>
        </div>
      </div>
    </div>
  )
})

export default BaseToast
