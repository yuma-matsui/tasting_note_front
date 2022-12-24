import { FC, memo } from 'react'
import { ReactNodeChildren } from '../../types'
import { Footer } from '../organisms'

const OnlyFooterLayout: FC<ReactNodeChildren> = memo(({ children }) => (
  <>
    {children}
    <Footer />
  </>
))

export default OnlyFooterLayout
