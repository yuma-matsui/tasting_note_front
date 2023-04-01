import { FC, memo } from 'react'

import { useFetchTastingSheets } from '../../hooks'
import { StartTastingButton } from '../atoms'
import { SignedInTopPageInstruction, TastingSheetLists } from '../organisms'
import { DefaultLayout } from '../templates'

const SignedInWelcomePage: FC = memo(() => {
  const { tastingSheets, hasTastingSheets, fetching } = useFetchTastingSheets()

  return fetching ? (
    <p>...Loading</p>
  ) : (
    <DefaultLayout>
      <div className="flex flex-col items-center">
        {hasTastingSheets ? <TastingSheetLists tastingSheets={tastingSheets} /> : <SignedInTopPageInstruction />}
        <StartTastingButton />
      </div>
    </DefaultLayout>
  )
})

export default SignedInWelcomePage
