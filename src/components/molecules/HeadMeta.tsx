import { FC, ReactNode, memo } from 'react'
import { Helmet } from 'react-helmet-async'

const HeadMeta: FC<{
  title: string
  description: string
  path?: string
  error?: boolean
  children: ReactNode
}> = memo(({ title, description, path, error = false, children }) => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {!error && <link rel="canonical" href={`https://tasting-note.com${path ?? ''}`} />}
    </Helmet>
    {children}
  </>
))

export default HeadMeta
