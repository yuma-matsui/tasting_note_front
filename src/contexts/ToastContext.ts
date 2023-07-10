import { createContext } from 'react'

import { ToastContextType } from '../types'

const ToastContext = createContext<ToastContextType>({
  showToast: () => {
    throw Error('No default value!')
  }
})

export default ToastContext
