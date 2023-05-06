import { FC } from 'react'
import { useLocation } from 'react-router-dom'

import { DefaultLayout } from '../templates'
import SignUpForm from '../molecules/forms/SignUpForm'
import { TastingSheet } from '../../types'

const SignUpPage: FC = () => {
  const location = useLocation()
  const tastingSheet = location.state as TastingSheet

  return (
    <DefaultLayout>
      <SignUpForm tastingSheet={tastingSheet} />
    </DefaultLayout>
  )
}

export default SignUpPage
