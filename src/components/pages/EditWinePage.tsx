import { FC, memo } from 'react'

import { metaContents } from '../../assets'
import { WineApi } from '../../types'
import { HeadMeta, WineForm } from '../molecules'
import { DefaultLayout } from '../templates'

const EditWinePage: FC<{ wine: WineApi }> = memo(({ wine }) => {
  const { description, title } = metaContents.editWine

  return (
    <HeadMeta title={title} description={description} path={`/wines/edit/${wine.id}`}>
      <DefaultLayout>
        <WineForm wine={wine} />
      </DefaultLayout>
    </HeadMeta>
  )
})

export default EditWinePage
