import { FC, memo } from 'react'
import { useAllTastingSheets } from '../../hooks'
import { StartTastingButton } from '../atoms'
import { SignedInTopPageInstruction, TastingSheetLists } from '../organisms'

import { DefaultLayout } from '../templates'

const SignedInWelcomePage: FC = memo(() => {
  const { tastingSheets, fetching, hasTastingSheets } = useAllTastingSheets()

  if (fetching) return <p>...Loading</p>

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center">
        {hasTastingSheets ? <TastingSheetLists tastingSheets={tastingSheets} /> : <SignedInTopPageInstruction />}
        <StartTastingButton />
      </div>
    </DefaultLayout>
  )
})

export default SignedInWelcomePage
