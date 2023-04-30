import { FallbackProps } from 'react-error-boundary'

import { useReloadDisplay, useShowErrorAndWarningToast, useUrgentSignOut } from '../../hooks'
import { DefaultLayout } from '../templates'

const ErrorFallbackForApi = ({ error }: FallbackProps) => {
  useUrgentSignOut()
  useShowErrorAndWarningToast()
  useReloadDisplay()

  if (error instanceof Error) console.error(error.message)

  return (
    <DefaultLayout>
      <p className="break-word leading-loose mb-10 md:px-5">
        エラーが発生しました。もう一度やりなおしてもうまくいかない場合は、
        時間をおいて再度実行または、管理者にお知らせください。
      </p>
    </DefaultLayout>
  )
}

export default ErrorFallbackForApi
