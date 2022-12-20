import { FC, ReactNode } from 'react'
import { Footer } from '../organisms'

type Props = {
  children: ReactNode
}

const OnlyFooterLayout: FC<Props> = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
)

export default OnlyFooterLayout
