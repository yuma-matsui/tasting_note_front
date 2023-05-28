import { ToastType } from '../types'

const useGetToastClassName = (type: ToastType) => {
  let toastColorClass = 'alert'
  if (type === 'success') toastColorClass += ' alert-success'
  if (type === 'warning') toastColorClass += ' alert-warning'
  if (type === 'error') toastColorClass += ' alert-error'

  return {
    toastColorClass
  }
}

export default useGetToastClassName
