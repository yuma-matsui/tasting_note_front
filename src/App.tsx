import { FC } from 'react'

import RouterConfig from './router/RouterConfig'
import { TastingSheetProvider } from './providers'

const App: FC = () => (
  <TastingSheetProvider>
    <RouterConfig />
  </TastingSheetProvider>
)

export default App
