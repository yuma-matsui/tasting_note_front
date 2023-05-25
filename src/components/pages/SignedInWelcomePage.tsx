import { FC, memo } from 'react'

import { useFetchTastingSheets } from '../../hooks'
import { LoadingSpinner, StartTastingLink } from '../atoms'
import { SignedInTopPageInstruction, TastingSheetListsWithSideBar } from '../organisms'
import { DefaultLayout } from '../templates'
import { metaContents } from '../../assets'
import { HeadMeta } from '../molecules'

const SignedInWelcomePage: FC = memo(() => {
  const { title, description } = metaContents.root
  const { tastingSheets, hasTastingSheets, fetching } = useFetchTastingSheets()

  return fetching ? (
    <LoadingSpinner />
  ) : (
    <HeadMeta title={title} description={description}>
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
    </HeadMeta>
  )
})

export default SignedInWelcomePage
