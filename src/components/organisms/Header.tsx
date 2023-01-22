import { FC, memo } from 'react'

import { HeaderFooterProps } from '../../types'
import { HeaderLink } from '../atoms'

const Header: FC<HeaderFooterProps> = memo(({ logoOnly = false, modalId }) => (
  <header className="flex flex-col items-center border-b border-solid border-red-800">
    <HeaderLink hasModal={logoOnly} modalId={modalId} />
  </header>
))

export default Header
