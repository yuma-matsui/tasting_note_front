import { FC } from 'react'

import { DefaultLayout } from '../templates'
import { GoToAnotherPageButton } from '../atoms'

const Error404Page: FC = () => (
  <DefaultLayout>
    <div className="flex flex-col items-center">
      <p className="break-word w-1/3">
        お探しのページは一時的にアクセスができない状況にあるか、移動もしくは削除された可能性があります。
        また、URLにタイプミスがないか再度ご確認ください。
      </p>
      <GoToAnotherPageButton text="Tasting Noteトップページへ" to="/" />
    </div>
  </DefaultLayout>
)

export default Error404Page
