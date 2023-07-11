import { FC, memo } from 'react'

import { useGetToastClassName } from '../../../hooks'
import { BaseToastProps } from '../../../types'

const BaseToast: FC<BaseToastProps> = memo(({ text, type, visible }) => {
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
