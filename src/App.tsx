import { FC } from 'react'
import { TastingSheetProvider, AuthProvider } from './providers'

import RouterConfig from './router/RouterConfig'

const App: FC = () => (
  <AuthProvider>
    <TastingSheetProvider>
      <RouterConfig />
    </TastingSheetProvider>
  </AuthProvider>
)

export default App
