import { FC } from 'react'
import { ReactNodeChildren } from '../../types'
import { Footer } from '../organisms'

const OnlyFooterLayout: FC<ReactNodeChildren> = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
)

export default OnlyFooterLayout
