import { FallbackProps } from 'react-error-boundary'

import { metaContents } from '../../assets'
import { useReloadDisplay, useShowErrorAndWarningToast, useUrgentSignOut } from '../../hooks'
import { HeadMeta } from '../molecules'
import { DefaultLayout } from '../templates'

const ErrorFallbackForApi = ({ error }: FallbackProps) => {
  useUrgentSignOut()
  useShowErrorAndWarningToast()
  useReloadDisplay()
  const { description, title } = metaContents.apiError

  if (error instanceof Error) console.error(error.message)

  return (
    <HeadMeta title={title} description={description} error>
      <DefaultLayout>
        <p className="break-word leading-loose mb-10 md:px-5">
          エラーが発生しました。もう一度やりなおしてもうまくいかない場合は、
          時間をおいて再度実行または、管理者にお知らせください。
        </p>
      </DefaultLayout>
    </HeadMeta>
  )
}

export default ErrorFallbackForApi
