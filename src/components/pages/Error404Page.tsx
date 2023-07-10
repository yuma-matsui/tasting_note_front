import { FC } from 'react'
import { Link } from 'react-router-dom'

import { DefaultLayout } from '../templates'
import { metaContents } from '../../assets'
import { HeadMeta } from '../molecules'

const Error404Page: FC = () => {
  const { description, title } = metaContents.notFound

  return (
    <HeadMeta title={title} description={description} error>
      <DefaultLayout>
        <p className="break-word leading-loose mb-6 md:px-5">
          お探しのページは一時的にアクセスができない状況にあるか、移動もしくは削除された可能性があります。
          また、URLにタイプミスがないか再度ご確認ください。
        </p>
        <Link to="/" className="w-full block text-center">
          Tasting Noteトップページへ
        </Link>
      </DefaultLayout>
    </HeadMeta>
  )
}

export default Error404Page
