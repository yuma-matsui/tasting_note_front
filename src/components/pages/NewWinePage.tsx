import { FC } from 'react'

import { metaContents } from '../../assets'
import { HeadMeta, WineForm } from '../molecules'
import { DefaultLayout } from '../templates'

const NewWinePage: FC = () => {
  const { description, path, title } = metaContents.newWine

  return (
    <HeadMeta title={title} description={description} path={path}>
      <DefaultLayout>
        <WineForm />
      </DefaultLayout>
    </HeadMeta>
  )
}

export default NewWinePage
