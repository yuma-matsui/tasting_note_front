import { FC } from 'react'

import { AuthProvider, RequestingProvider, TastingSheetsProvider, ToastProvider } from './providers'

import RouterConfig from './router/RouterConfig'

const App: FC = () => (
  <AuthProvider>
    <RequestingProvider>
      <TastingSheetsProvider>
        <ToastProvider>
          <RouterConfig />
        </ToastProvider>
      </TastingSheetsProvider>
    </RequestingProvider>
  </AuthProvider>
)

export default App
