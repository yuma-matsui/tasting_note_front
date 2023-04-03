import { FC, memo } from 'react'
import { ToastType } from '../../../types'

const BaseToast: FC<{
  text: string
  visible: boolean
  type: ToastType
}> = memo(({ text, visible, type }) => (
  <div className={`toast toast-top toast-end ${visible ? '' : 'hidden'} `}>
    <div className={`alert alert-${type}`}>
      <div>
        <span className="text-white">{text}</span>
      </div>
    </div>
  </div>
))

export default BaseToast
