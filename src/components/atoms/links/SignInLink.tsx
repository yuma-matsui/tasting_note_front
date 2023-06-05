import { FC, memo } from 'react'
import { BiLogInCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import { TastingSheet } from '../../../types'

const SignInLink: FC<{
  tastingSheet?: TastingSheet | undefined
}> = memo(({ tastingSheet }) => (
  <Link to="/signin" state={tastingSheet} className="base-btn bg-theme-green w-40 !px-0">
    <div className="flex items-center justify-center">
      <BiLogInCircle className="mr-1" />
      <span>ログイン</span>
    </div>
  </Link>
))

export default SignInLink
