import { useContext } from 'react'

import { ToastContext } from '../../contexts'

const useToastContext = () => useContext(ToastContext)

export default useToastContext
