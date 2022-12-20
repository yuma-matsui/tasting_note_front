import { FC } from 'react'
import logo from '../../assets/images/demo_logo.jpg'

const Header: FC = () => (
  <header style={{ display: 'flex', borderBottom: '1px solid red' }}>
    <img src={logo} alt="Header Logo" style={{ width: '100px', height: '100px' }} />
    <div>
      <h2>Tasting Note</h2>
      <p>テイスティングを記録してソムリエに</p>
    </div>
  </header>
)

export default Header
