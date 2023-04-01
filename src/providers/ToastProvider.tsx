import { FC, useCallback, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'

import { BaseToast } from '../components/atoms'
import { ToastContext } from '../contexts'
import { useAuthContext, useRequestingContext } from '../hooks'
import { ReactNodeChildren } from '../types'

const DISPLAYING_MILLISECOND = 2000

const ToastProvider: FC<ReactNodeChildren> = ({ children }) => {
  const { loading } = useAuthContext()
  const { requesting } = useRequestingContext()

  const [visible, setVisible] = useState(false)
  const [toastText, setToastText] = useState<string>('')

  const showToast = useCallback(
    (text: string) => {
      if (loading || requesting) return
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
      {createPortal(<BaseToast text={toastText} visible={visible} />, document.body)}
    </ToastContext.Provider>
  )
}

export default ToastProvider
