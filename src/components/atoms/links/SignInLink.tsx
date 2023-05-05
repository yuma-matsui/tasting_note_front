import { FC, memo } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const SignInLink: FC = memo(() => (
  <Link to="/login" className="base-btn bg-theme-green w-40">
    <div className="flex items-center justify-center">
      <FcGoogle className="mr-1" />
      <span>ログイン</span>
    </div>
  </Link>
))

export default SignInLink
