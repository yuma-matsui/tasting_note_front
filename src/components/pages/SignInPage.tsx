import { FC } from 'react'
import { useLocation } from 'react-router-dom'

import { DefaultLayout } from '../templates'
import { SignInForm } from '../molecules'
import { TastingSheet } from '../../types'

const SignInPage: FC = () => {
  const location = useLocation()
  const tastingSheet = location.state as TastingSheet

  return (
    <DefaultLayout>
      <SignInForm tastingSheet={tastingSheet} />
    </DefaultLayout>
  )
}

export default SignInPage
