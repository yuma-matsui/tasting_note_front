import { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/demo_logo.jpg'

const HeaderLink: FC = memo(() => (
  <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
    <div style={{ display: 'flex' }}>
      <img src={logo} alt="Header Logo" style={{ width: '100px', height: '100px' }} />
      <div>
        <h2>Tasting Note</h2>
        <p>テイスティングを記録してソムリエに</p>
      </div>
    </div>
  </Link>
))

export default HeaderLink
