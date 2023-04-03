import ToastProps from '../props/toastProps'

type ToastContextType = {
  showToast: ({ text, type }: ToastProps) => void
}

export default ToastContextType
