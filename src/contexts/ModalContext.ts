import { createContext } from 'react'

import { ModalContextType } from '../types'

const ModalContext = createContext<ModalContextType>({
  showModal: () => {
    throw Error('No default value!')
  }
})

export default ModalContext
