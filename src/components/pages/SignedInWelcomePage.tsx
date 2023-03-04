import { FC, memo } from 'react'
import { useFetchTastingSheets, useTastingSheetsContext } from '../../hooks'
import { StartTastingButton } from '../atoms'
import { SignedInTopPageInstruction, TastingSheetLists } from '../organisms'

import { DefaultLayout } from '../templates'

const SignedInWelcomePage: FC = memo(() => {
  const { tastingSheets } = useTastingSheetsContext()
  const { fetching, hasTastingSheets } = useFetchTastingSheets()

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
