import { FC, memo } from 'react'

import logo from '../../../assets/images/logo.png'

const TopPageTitle: FC = memo(() => (
  <div className="flex my-8">
    <img className="w-16 h-16" src={logo} alt="logo" />
    <div className="ml-4 font-mincho flex flex-col">
      <h1 className="font-bold text-3xl tracking-wider">Tasting Note</h1>
      <p className="text-xs leading-6 mt-1">テイスティングを記録してソムリエに</p>
    </div>
  </div>
))

export default TopPageTitle
