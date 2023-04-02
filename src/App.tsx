import { FC } from 'react'

import { AuthProvider, RequestingProvider, ToastProvider } from './providers'

import RouterConfig from './router/RouterConfig'

const App: FC = () => (
  <ToastProvider>
    <AuthProvider>
      <RequestingProvider>
        <RouterConfig />
      </RequestingProvider>
    </AuthProvider>
  </ToastProvider>
)

export default App
