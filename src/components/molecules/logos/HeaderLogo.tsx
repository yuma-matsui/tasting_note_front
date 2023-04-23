import { FC, memo } from 'react'

import logo from '../../../assets/images/logo.png'

const HeaderLogo: FC = memo(() => (
  <div className="flex">
    <img src={logo} alt="Header Logo" className="w-14 h-14" />
    <div className="ml-2 flex flex-col justify-between">
      <h2 className="text-theme-red text-2xl tracking-wide font-semibold text-left">Tasting Note</h2>
      <p className="leading-5">テイスティングを記録してソムリエに</p>
    </div>
  </div>
))

export default HeaderLogo
