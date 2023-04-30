import { useEffect } from 'react'

import useToastContext from './context/useToastContext'

const WAITING_SHOW_TOAST = 3000

const useShowErrorAndWarningToast = () => {
  const { showToast } = useToastContext()
  useEffect(() => {
    showToast({
      text: '通信エラーが発生しました',
      type: 'error'
    })

    const showToastAfterTwoSecond = window.setTimeout(() => {
      showToast({
        text: '5秒後に画面が切り替わります',
        type: 'warning'
      })
    }, WAITING_SHOW_TOAST)

    return () => window.clearTimeout(showToastAfterTwoSecond)
  }, [showToast])
}

export default useShowErrorAndWarningToast
