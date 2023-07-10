import { AuthError } from 'firebase/auth'
import { FC, memo, useEffect } from 'react'

import { FooterLogo, HeadMeta, HeaderLogo } from '../molecules'
import { useToastContext, useUrgentSignOut } from '../../hooks'
import { metaContents } from '../../assets'

const AuthErrorPage: FC<{
  error: Error | AuthError
}> = memo(({ error }) => {
  useUrgentSignOut()
  useEffect(() => {
    console.error(error.message)
  }, [error])

  const { showToast } = useToastContext()
  useEffect(() => {
    showToast({
      text: '認証エラーが発生しました',
      type: 'error'
    })
  })

  const { description, title } = metaContents.apiError

  return (
    <HeadMeta title={title} description={description} error>
      <header className="py-4 main-wrapper">
        <HeaderLogo />
      </header>
      <div className="main-wrapper">
        <p className="break-word leading-loose mb-6 md:px-5">
          認証エラーが発生しました。もう一度やりなおしてもうまくいかない場合は、
          時間をおいて再度実行または、管理者にお知らせください。
        </p>
        <a href="/" className="block w-full text-center mb-6">
          Tasting Noteトップページへ
        </a>
      </div>
      <footer className="mt-6 main-wrapper">
        <div className="flex flex-col items-center pt-4 border-t">
          <FooterLogo />
          <p className="text-gray-700 mt-4">&copy;2023 yuma-matsui</p>
        </div>
      </footer>
    </HeadMeta>
  )
})

export default AuthErrorPage
