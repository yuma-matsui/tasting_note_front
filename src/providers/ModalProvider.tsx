import { FC, ReactElement, useCallback, useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { useLocation } from 'react-router-dom'

import { CloseModalButton } from '../components/atoms'
import { BaseModal } from '../components/molecules'
import { ModalContext } from '../contexts'
import { ReactNodeChildren, ShowModalProps } from '../types'

const ModalProvider: FC<ReactNodeChildren> = ({ children }) => {
  const [visible, setVisible] = useState(false)
  const [modalText, setModalText] = useState('')
  const [modalLeftButton, setModalLeftButton] = useState<ReactElement>(<span />)
  const [modalRightButton, setModalRightButton] = useState<ReactElement>(<span />)
  const { pathname } = useLocation()

  useEffect(() => {
    setVisible(false)
  }, [pathname])

  const showModal = useCallback(({ text, leftButton, rightButton }: ShowModalProps) => {
    setModalText(text)
    setModalLeftButton(leftButton ?? <CloseModalButton onClick={() => setVisible(false)} />)
    setModalRightButton(rightButton)
    setVisible(true)
  }, [])

  const modalState = useMemo(() => ({ showModal }), [showModal])

  return (
    <ModalContext.Provider value={modalState}>
      {children}
      {createPortal(
        <BaseModal text={modalText} leftButton={modalLeftButton} rightButton={modalRightButton} visible={visible} />,
        document.body
      )}
    </ModalContext.Provider>
  )
}

export default ModalProvider
