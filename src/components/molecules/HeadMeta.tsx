import { FC, memo } from 'react'
import { Helmet } from 'react-helmet-async'

import { HeadMetaProps } from '../../types'

const HeadMeta: FC<HeadMetaProps> = memo(({ children, description, error = false, path, title }) => (
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
