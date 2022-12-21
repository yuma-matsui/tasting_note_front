import { FC } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/demo_logo.jpg'

const Footer: FC = () => (
  <footer style={{ borderTop: '1px solid gray', margin: '32px auto', paddingTop: '16px' }}>
    <Link to="/" style={{ color: '#000', textDecoration: 'none' }}>
      <div style={{ display: 'flex' }}>
        <img src={logo} alt="Footer Logo" style={{ width: '50px', height: '50px' }} />
        <p>Tasting Note</p>
      </div>
    </Link>
    <ul style={{ display: 'flex', listStyle: 'none' }}>
      <li style={{ marginRight: '16px' }}>利用規約</li>
      <li>プライバシーポリシー</li>
    </ul>
    <p>&copy; 2022 yuma-matsui</p>
  </footer>
)

export default Footer
