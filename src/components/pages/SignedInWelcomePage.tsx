import { FC, memo } from 'react'

import { useFetchTastingSheets } from '../../hooks'
import { LoadingSpinner, StartTastingButton } from '../atoms'
import { SignedInTopPageInstruction, TastingSheetListsWithSideBar } from '../organisms'
import { DefaultLayout } from '../templates'

const SignedInWelcomePage: FC = memo(() => {
  const { tastingSheets, hasTastingSheets, fetching } = useFetchTastingSheets()

  return fetching ? (
    <LoadingSpinner />
  ) : (
    <DefaultLayout>
      <div className="flex flex-col items-center">
        {hasTastingSheets ? (
          <TastingSheetListsWithSideBar tastingSheets={tastingSheets} />
        ) : (
          <SignedInTopPageInstruction />
        )}
      </div>
      <StartTastingButton />
    </DefaultLayout>
  )
})

export default SignedInWelcomePage
