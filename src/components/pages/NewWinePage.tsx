import { FC } from 'react'

import { HeadMeta, WineForm } from '../molecules'
import { DefaultLayout } from '../templates'
import { metaContents } from '../../assets'

const NewWinePage: FC = () => {
  const { title, description, path } = metaContents.newWine

  return (
    <HeadMeta title={title} description={description} path={path}>
      <DefaultLayout>
        <WineForm />
      </DefaultLayout>
    </HeadMeta>
  )
}

export default NewWinePage
