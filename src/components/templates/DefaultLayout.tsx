import { FC, ReactNode } from 'react'
import { Footer, Header } from '../organisms'

type Props = {
  children: ReactNode
}

const DefaultLayout: FC<Props> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default DefaultLayout
