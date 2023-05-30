import { ReactNode } from 'react'

type HeadMetaProps = {
  title: string
  description: string
  path?: string | undefined
  error?: boolean
  children: ReactNode
}

export default HeadMetaProps
