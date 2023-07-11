import { ReactNode } from 'react'

type HeadMetaProps = {
  children: ReactNode
  description: string
  error?: boolean
  path?: string | undefined
  title: string
}

export default HeadMetaProps
