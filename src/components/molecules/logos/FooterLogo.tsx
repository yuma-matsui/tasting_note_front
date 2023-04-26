import { FC, memo } from 'react'

import logo from '../../../assets/images/logo.png'

const FooterLogo: FC = memo(() => (
  <div className="flex">
    <img src={logo} alt="Footer Logo" className="w-6 h-6 mr-1" />
    <p className="font-mincho">Tasting Note</p>
  </div>
))

export default FooterLogo
