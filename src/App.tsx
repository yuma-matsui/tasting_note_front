import { FC } from 'react'
import { TastingSheetProvider, AuthProvider, TastingSheetsProvider, ToastProvider, ModalProvider } from './providers'

import RouterConfig from './router/RouterConfig'

const App: FC = () => (
  <AuthProvider>
    <TastingSheetProvider>
      <TastingSheetsProvider>
        <ToastProvider>
          <ModalProvider>
            <RouterConfig />
          </ModalProvider>
        </ToastProvider>
      </TastingSheetsProvider>
    </TastingSheetProvider>
  </AuthProvider>
)

export default App
