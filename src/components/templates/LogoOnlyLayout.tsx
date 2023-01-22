import { FC, memo } from 'react'
import { useLocation } from 'react-router-dom'

import { ReactNodeChildren } from '../../types'
import { EditCheckModalBox } from '../molecules'
import { Footer, Header } from '../organisms'

const LogoOnlyLayout: FC<ReactNodeChildren> = memo(({ children }) => {
  const { pathname } = useLocation()
  const hasModal = pathname.includes('new')
  const modalId = 'edit-check-modal'

  return (
    <>
      <Header logoOnly={hasModal} modalId={modalId} />
      {children}
      <Footer logoOnly={hasModal} modalId={modalId} />
      <EditCheckModalBox id={modalId} />
    </>
  )
})

export default LogoOnlyLayout
