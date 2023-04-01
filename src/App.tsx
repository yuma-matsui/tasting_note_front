import { FC } from 'react'

import { AuthProvider, RequestingProvider, ToastProvider } from './providers'

import RouterConfig from './router/RouterConfig'

const App: FC = () => (
  <AuthProvider>
    <RequestingProvider>
      <ToastProvider>
        <RouterConfig />
      </ToastProvider>
    </RequestingProvider>
  </AuthProvider>
)

export default App
