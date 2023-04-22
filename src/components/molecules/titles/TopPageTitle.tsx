import { FC, memo } from 'react'

import logo from '../../../assets/images/logo.png'

const TopPageTitle: FC = memo(() => (
  <div className="flex items-center">
    <img className="w-14 h-14" src={logo} alt="logo" />
    <div className="ml-2 flex flex-col">
      <h1 className="text-theme-red font-bold text-2xl">Tasting Note</h1>
      <p className="text-xs mt-1">テイスティングを記録してソムリエに</p>
    </div>
  </div>
))

export default TopPageTitle
