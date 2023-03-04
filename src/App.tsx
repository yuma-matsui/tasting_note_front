import { FC } from 'react'
import { TastingSheetProvider, AuthProvider, TastingSheetsProvider } from './providers'

import RouterConfig from './router/RouterConfig'

const App: FC = () => (
  <AuthProvider>
    <TastingSheetProvider>
      <TastingSheetsProvider>
        <RouterConfig />
      </TastingSheetsProvider>
    </TastingSheetProvider>
  </AuthProvider>
)

export default App
