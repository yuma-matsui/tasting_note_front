import { FC } from 'react'
import { TastingSheetProvider } from './providers'

import RouterConfig from './router/RouterConfig'

const App: FC = () => (
  <TastingSheetProvider>
    <RouterConfig />
  </TastingSheetProvider>
)

export default App
