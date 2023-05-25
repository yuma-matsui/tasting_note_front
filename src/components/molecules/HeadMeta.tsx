import { FC, ReactNode, memo } from 'react'
import { Helmet } from 'react-helmet'

const HeadMeta: FC<{
  title: string
  description: string
  path?: string
  children: ReactNode
}> = memo(({ title, description, path, children }) => (
  <>
    <Helmet>
      <title>{title} | Tasting Note</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://tasting-note.com${path ?? ''}`} />
    </Helmet>
    {children}
  </>
))

export default HeadMeta
