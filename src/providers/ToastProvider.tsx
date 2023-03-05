import { FC, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'

import { BaseToast } from '../components/atoms'
import { ToastContext } from '../contexts'
import { ReactNodeChildren } from '../types'

const DISPLAYING_MILLISECOND = 2000

const ToastProvider: FC<ReactNodeChildren> = ({ children }) => {
  const [visible, setVisible] = useState(false)
  const [toastText, setToastText] = useState<string>('')

  const showToast = (text: string) => {
    setToastText(text)
    setVisible(true)
    window.setTimeout(() => setVisible(false), DISPLAYING_MILLISECOND)
  }

  const toastState = useMemo(() => ({ showToast }), [])

  return (
    <ToastContext.Provider value={toastState}>
      {children}
      {createPortal(<BaseToast text={toastText} visible={visible} />, document.body)}
    </ToastContext.Provider>
  )
}

export default ToastProvider
