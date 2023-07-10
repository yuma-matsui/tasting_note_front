import { FC, memo } from 'react'

import { WineApi } from '../../types'
import { HeadMeta, WineForm } from '../molecules'
import { DefaultLayout } from '../templates'
import { metaContents } from '../../assets'

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
