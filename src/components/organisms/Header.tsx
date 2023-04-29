import { FC, memo } from 'react'

import { HeaderLink } from '../atoms'

const Header: FC = memo(() => (
  <header className="border-b border-b-theme-red mb-8 py-2 sub-wrapper">
    <HeaderLink />
  </header>
))

export default Header
