import { FC, memo } from 'react'
import { Link } from 'react-router-dom'

import { TastingSheet } from '../../types'

const SignInOrUpAndPostLinks: FC<{
  tastingSheet: TastingSheet
}> = memo(({ tastingSheet }) => {
  const textColor = tastingSheet.color === 'red' ? 'text-theme-red' : 'text-theme-green'

  return (
    <p className="text-sm">
      <span className={`text-base mr-1 ml-2 ${textColor}`}>
        <Link to="/signup" state={tastingSheet}>
          サインアップ
        </Link>
      </span>
      または
      <span className={`text-base mx-1 ${textColor}`}>
        <Link to="/signin" state={tastingSheet}>
          サインイン
        </Link>
      </span>
      して記録
    </p>
  )
})

export default SignInOrUpAndPostLinks
