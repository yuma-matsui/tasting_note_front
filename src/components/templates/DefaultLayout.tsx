import { FC } from 'react'
import { ReactNodeChildren } from '../../types'
import { Footer, Header } from '../organisms'

const DefaultLayout: FC<ReactNodeChildren> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default DefaultLayout
