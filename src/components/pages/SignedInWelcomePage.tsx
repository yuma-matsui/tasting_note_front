import { FC, memo } from 'react'

import { useFetchTastingSheets } from '../../hooks'
import { LoadingSpinner, StartTastingLink } from '../atoms'
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
      <StartTastingLink text="テイスティングをはじめる" />
    </DefaultLayout>
  )
})

export default SignedInWelcomePage
