import { FC, memo } from 'react'

import logo from '../../../assets/images/logo.png'

const HeaderLogo: FC = memo(() => <img src={logo} alt="Header Logo" className="w-16 h-16" />)

export default HeaderLogo
