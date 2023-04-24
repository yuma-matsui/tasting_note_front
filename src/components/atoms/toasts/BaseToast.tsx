import { FC, memo } from 'react'

import { ToastType } from '../../../types'
import { useGetToastClassName } from '../../../hooks'

const BaseToast: FC<{
  text: string
  visible: boolean
  type: ToastType
}> = memo(({ text, visible, type }) => {
  const { toastClassName, toastColorClass } = useGetToastClassName(type, visible)

  return (
    <div className={toastClassName}>
      <div className={toastColorClass}>
        <div>
          <span className="text-white">{text}</span>
        </div>
      </div>
    </div>
  )
})

export default BaseToast
