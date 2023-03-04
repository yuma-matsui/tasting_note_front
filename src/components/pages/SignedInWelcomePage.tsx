import { FC, memo } from 'react'
import { useAllTastingSheets, useAuthContext } from '../../hooks'
import { StartTastingButton } from '../atoms'
import { SignedInTopPageInstruction } from '../organisms'

import { DefaultLayout } from '../templates'

const SignedInWelcomePage: FC = memo(() => {
  const { tastingSheets, fetching, hasTastingSheets } = useAllTastingSheets()

  if (fetching) return <p>...Loading</p>

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center">
        {hasTastingSheets ? <p>テイスティグシート一覧</p> : <SignedInTopPageInstruction />}
        <StartTastingButton />
      </div>
    </DefaultLayout>
  )
})

export default SignedInWelcomePage
