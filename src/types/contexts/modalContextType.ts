import ShowModalProps from '../props/showModalProps'

type ModalContextType = {
  showModal: ({ leftButton, rightButton, text }: ShowModalProps) => void
}

export default ModalContextType
