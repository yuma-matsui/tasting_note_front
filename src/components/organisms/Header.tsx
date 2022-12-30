import { FC, memo } from 'react'
import { HeaderLink } from '../atoms'

const Header: FC = memo(() => (
  <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid red' }}>
    <HeaderLink />
  </header>
))

export default Header
