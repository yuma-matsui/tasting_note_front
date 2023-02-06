import { FC } from 'react'
import { TastingSheetProvider, UserProvider } from './providers'

import RouterConfig from './router/RouterConfig'

const App: FC = () => (
  <UserProvider>
    <TastingSheetProvider>
      <RouterConfig />
    </TastingSheetProvider>
  </UserProvider>
)

export default App
