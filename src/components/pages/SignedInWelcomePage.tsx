import { FC, memo } from 'react'

import { metaContents } from '../../assets'
import { useFetchTastingSheets } from '../../hooks'
import { LoadingSpinner, StartTastingLink } from '../atoms'
import { HeadMeta } from '../molecules'
import { SignedInTopPageInstruction, TastingSheetListsWithSideBar } from '../organisms'
import { DefaultLayout } from '../templates'

const SignedInWelcomePage: FC = memo(() => {
  const { description, title } = metaContents.root
  const { fetching, hasTastingSheets, tastingSheets } = useFetchTastingSheets()

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
