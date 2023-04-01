import { FC } from 'react'

import { AuthProvider, TastingSheetsProvider, ToastProvider } from './providers'

import RouterConfig from './router/RouterConfig'

const App: FC = () => (
  <AuthProvider>
    <TastingSheetsProvider>
      <ToastProvider>
        <RouterConfig />
      </ToastProvider>
    </TastingSheetsProvider>
  </AuthProvider>
)

export default App
