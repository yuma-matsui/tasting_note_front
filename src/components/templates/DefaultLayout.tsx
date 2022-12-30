import { FC, memo } from 'react'
import { ReactNodeChildren } from '../../types'
import { Footer, Header } from '../organisms'

const DefaultLayout: FC<ReactNodeChildren> = memo(({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
))

export default DefaultLayout
