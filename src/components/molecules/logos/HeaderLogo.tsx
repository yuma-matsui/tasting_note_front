import { FC, memo } from 'react'

import logo from '../../../assets/images/logo.png'

const HeaderLogo: FC = memo(() => (
  <div className="flex cursor-pointer">
    <img src={logo} alt="Header Logo" className="w-24 h-24" />
    <div>
      <h2>Tasting Note</h2>
      <p>テイスティングを記録してソムリエに</p>
    </div>
  </div>
))

export default HeaderLogo
