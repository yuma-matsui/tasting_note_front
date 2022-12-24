import { FC, FormEvent, memo } from 'react'
import { ReactNodeChildren } from '../../../../types'

const BaseForm: FC<ReactNodeChildren> = memo(({ children }) => {
  const onSubmitPrevent = (e: FormEvent<HTMLFormElement>) => e.preventDefault()

  return <form onSubmit={onSubmitPrevent}>{children}</form>
})

export default BaseForm
