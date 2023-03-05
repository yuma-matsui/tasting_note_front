import { Dispatch, SetStateAction } from 'react'

import ShowModalProps from '../props/showModalProps'

type ModalContextType = {
  showModal: ({ text, content, closeText }: ShowModalProps) => void
  setVisible: Dispatch<SetStateAction<boolean>>
}

export default ModalContextType
