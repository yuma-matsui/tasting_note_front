import { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import { MdAppRegistration } from 'react-icons/md'

const SignUpLink: FC = memo(() => (
  <Link to="/signup" className="base-btn bg-theme-red w-40">
    <div className="flex items-center justify-center">
      <MdAppRegistration className="mr-1" />
      <span>サインアップ</span>
    </div>
  </Link>
))

export default SignUpLink
