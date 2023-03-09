import ShowModalProps from '../props/showModalProps'

type ModalContextType = {
  showModal: ({ text, leftButton, rightButton }: ShowModalProps) => void
}

export default ModalContextType
