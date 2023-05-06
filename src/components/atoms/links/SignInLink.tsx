import { FC, memo } from 'react'
import { BiLogInCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const SignInLink: FC = memo(() => (
  <Link to="/signin" className="base-btn bg-theme-green w-44">
    <div className="flex items-center justify-center">
      <BiLogInCircle className="mr-1" />
      <span>ログイン</span>
    </div>
  </Link>
))

export default SignInLink
