import { FC, memo } from 'react'

import logo from '../../../assets/images/logo.png'

const FooterLogo: FC = memo(() => (
  <div className="flex items-center">
    <img src={logo} alt="Footer Logo" className="w-12 h-12" />
    <p>Tasting Note</p>
  </div>
))

export default FooterLogo
