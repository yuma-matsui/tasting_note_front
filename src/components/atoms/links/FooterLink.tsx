import { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/demo_logo.jpg'

const FooterLink: FC = memo(() => (
  <Link to="/" style={{ color: '#000', textDecoration: 'none' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt="Footer Logo" style={{ width: '50px', height: '50px' }} />
      <p>Tasting Note</p>
    </div>
  </Link>
))

export default FooterLink
