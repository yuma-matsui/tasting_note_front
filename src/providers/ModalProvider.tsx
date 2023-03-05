import { FC, ReactElement, useCallback, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { BaseModal } from '../components/molecules'

import { ModalContext } from '../contexts'
import { ReactNodeChildren, ShowModalProps } from '../types'

const ModalProvider: FC<ReactNodeChildren> = ({ children }) => {
  const [visible, setVisible] = useState(false)
  const [modalText, setModalText] = useState('')
  const [modalContent, setModalContent] = useState<ReactElement>(<span />)
  const [modalCloseText, setModalCloseText] = useState<string | undefined>('')

  const showModal = useCallback(({ text, content, closeText }: ShowModalProps) => {
    setModalText(text)
    setModalContent(content)
    setModalCloseText(closeText)
    setVisible(true)
  }, [])

  const modalState = useMemo(() => ({ showModal, setVisible }), [showModal])

  return (
    <ModalContext.Provider value={modalState}>
      {children}
      {createPortal(
        <BaseModal text={modalText} content={modalContent} visible={visible} closeText={modalCloseText} />,
        document.body
      )}
    </ModalContext.Provider>
  )
}

export default ModalProvider
