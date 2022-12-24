import { FC, memo } from 'react'
import { FooterLink } from '../atoms'

const Footer: FC = memo(() => (
  <footer
    style={{
      borderTop: '1px solid gray',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '16px'
    }}
  >
    <FooterLink />
    <ul style={{ display: 'flex', listStyle: 'none' }}>
      <li style={{ marginRight: '16px' }}>利用規約</li>
      <li>プライバシーポリシー</li>
    </ul>
    <p>&copy; 2022 yuma-matsui</p>
  </footer>
))

export default Footer
