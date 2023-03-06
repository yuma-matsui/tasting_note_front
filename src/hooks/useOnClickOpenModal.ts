import { ShowModalProps } from '../types'
import useModalContext from './context/useModalContext'

const useOnClickOpenModal = (showModalProps: ShowModalProps) => {
  const { showModal } = useModalContext()
  const onClickOpenModal = () => showModal(showModalProps)

  return {
    onClickOpenModal
  }
}

export default useOnClickOpenModal
