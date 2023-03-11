import { createContext } from 'react'

import { ModalContextType } from '../types'

const ModalContext = createContext<ModalContextType>({
  showModal: () => {}
})

export default ModalContext
