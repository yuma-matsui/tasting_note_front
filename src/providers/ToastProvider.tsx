import { FC, useCallback, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'

import { BaseToast } from '../components/atoms'
import { ToastContext } from '../contexts'
import { useAuthContext, useRequestingContext } from '../hooks'
import { ReactNodeChildren, ToastProps, ToastType } from '../types'

const DISPLAYING_MILLISECOND = 2000

const ToastProvider: FC<ReactNodeChildren> = ({ children }) => {
  const { loading } = useAuthContext()
  const { requesting } = useRequestingContext()

  const [visible, setVisible] = useState(false)
  const [toastText, setToastText] = useState<string>('')
  const [toastType, setToastType] = useState<ToastType>('success')

  const showToast = useCallback(
    ({ text, type }: ToastProps) => {
      if (loading || requesting) return
      setToastType(type)
      setToastText(text)
      setVisible(true)
      window.setTimeout(() => setVisible(false), DISPLAYING_MILLISECOND)
    },
    [loading, requesting]
  )

  const toastState = useMemo(() => ({ showToast }), [showToast])

  return (
    <ToastContext.Provider value={toastState}>
      {children}
      {createPortal(<BaseToast text={toastText} visible={visible} type={toastType} />, document.body)}
    </ToastContext.Provider>
  )
}

export default ToastProvider
