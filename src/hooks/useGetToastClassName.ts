import { ToastType } from '../types'

const useGetToastClassName = (type: ToastType, visible: boolean) => {
  let toastClassName = 'toast toast-top toast-end'
  let toastColorClass = 'alert'

  if (!visible) toastClassName += ' hidden'
  if (type === 'success') toastColorClass += ' alert-success'
  if (type === 'warning') toastColorClass += ' alert-warning'
  if (type === 'error') toastColorClass += ' alert-error'

  return {
    toastClassName,
    toastColorClass
  }
}

export default useGetToastClassName
