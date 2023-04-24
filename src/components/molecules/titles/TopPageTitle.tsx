import { FC, memo } from 'react'

import logo from '../../../assets/images/logo.png'

const TopPageTitle: FC = memo(() => (
  <div className="flex my-8">
    <img className="w-16 h-16" src={logo} alt="logo" />
    <div className="ml-2 flex flex-col justify-between">
      <h1 className="text-theme-red font-bold text-3xl tracking-wider">Tasting Note</h1>
      <p className="leading-5">テイスティングを記録してソムリエに</p>
    </div>
  </div>
))

export default TopPageTitle
