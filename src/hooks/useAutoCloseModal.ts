import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import useModalContext from './context/useModalContext'

const useAutoCloseModal = () => {
  const { setVisible } = useModalContext()
  const { pathname } = useLocation()

  useEffect(() => {
    setVisible(false)
  }, [pathname, setVisible])
}

export default useAutoCloseModal
