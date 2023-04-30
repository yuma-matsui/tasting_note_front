import { FC } from 'react'
import { Link } from 'react-router-dom'

import { DefaultLayout } from '../templates'

const Error404Page: FC = () => (
  <DefaultLayout>
    <p className="break-word leading-loose mb-6 md:px-5">
      お探しのページは一時的にアクセスができない状況にあるか、移動もしくは削除された可能性があります。
      また、URLにタイプミスがないか再度ご確認ください。
    </p>
    <Link to="/" className="w-full block text-center">
      Tasting Noteトップページへ
    </Link>
  </DefaultLayout>
)

export default Error404Page
