import { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import { MdAppRegistration } from 'react-icons/md'

import { TastingSheet } from '../../../types'

const SignUpLink: FC<{
  tastingSheet?: TastingSheet | undefined
}> = memo(({ tastingSheet }) => (
  <Link to="/signup" state={tastingSheet} className="base-btn bg-theme-red w-40 !px-0">
    <div className="flex items-center justify-center">
      <MdAppRegistration className="mr-1" />
      <span>サインアップ</span>
    </div>
  </Link>
))

export default SignUpLink
