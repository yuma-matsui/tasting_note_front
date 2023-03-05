import { createContext } from 'react'

import { ToastContextType } from '../types'

const ToastContext = createContext<ToastContextType>({
  showToast: () => {}
})

export default ToastContext
