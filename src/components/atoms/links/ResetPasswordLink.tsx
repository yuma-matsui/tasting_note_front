import { FC, memo } from 'react'
import { Link } from 'react-router-dom'

const ResetPasswordLink: FC = memo(() => (
  <p className="text-sm mb-4">
    パスワードをお忘れの方は
    <span className="text-gray-400 text-base">
      <Link to="/reset_password">こちら</Link>
    </span>
  </p>
))

export default ResetPasswordLink
