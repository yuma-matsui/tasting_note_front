import { FC, memo } from 'react'

import logo from '../../../assets/images/logo.png'

const HeaderLogo: FC = memo(() => (
  <div className="flex px-5">
    <img src={logo} alt="Header Logo" className="w-14 h-14" />
    <div className="ml-2 flex flex-col justify-between font-mincho">
      <h2 className="text-theme-red text-2xl tracking-wide font-semibold text-left">Tasting Note</h2>
      <p className="text-xs">テイスティングを記録してソムリエに</p>
    </div>
  </div>
))

export default HeaderLogo
