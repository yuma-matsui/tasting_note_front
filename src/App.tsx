import { FC } from 'react'
import { TastingSheetProvider, AuthProvider, TastingSheetsProvider, ToastProvider } from './providers'

import RouterConfig from './router/RouterConfig'

const App: FC = () => (
  <AuthProvider>
    <TastingSheetProvider>
      <TastingSheetsProvider>
        <ToastProvider>
          <RouterConfig />
        </ToastProvider>
      </TastingSheetsProvider>
    </TastingSheetProvider>
  </AuthProvider>
)

export default App
