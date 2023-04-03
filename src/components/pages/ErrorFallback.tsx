import { useEffect } from 'react'
import { FallbackProps } from 'react-error-boundary'

import { useToastContext } from '../../hooks'

const ErrorFallback = ({ error }: FallbackProps) => {
  const { showToast } = useToastContext()

  useEffect(() => {
    if (error instanceof Error) console.error(error.message)
    showToast('通信エラーが発生しました')
  }, [error, showToast])

  return (
    <div className="flex flex-col items-center">
      <p>
        エラーが発生しました。もう一度やりなおしてもうまくいかない場合は、
        <br />
        時間をおいて再度実行または、管理者にお知らせください。
      </p>
      <a href="/">Tasting Noteトップページへ</a>
    </div>
  )
}

export default ErrorFallback
