import { FC, memo } from 'react'

import { HeaderLink } from '../atoms'

const Header: FC = memo(() => (
  <header className="flex flex-col items-center border-b border-solid border-red-800">
    <HeaderLink />
  </header>
))

export default Header
