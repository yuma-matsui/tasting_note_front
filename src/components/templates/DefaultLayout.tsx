import { FC, memo } from 'react'

import { ReactNodeChildren } from '../../types'
import { Footer, Header } from '../organisms'

const DefaultLayout: FC<ReactNodeChildren> = memo(({ children }) => (
  <>
    <Header />
    <div className="main-wrapper">{children}</div>
    <Footer />
  </>
))

export default DefaultLayout
