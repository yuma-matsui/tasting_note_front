import { FC } from 'react'

import RouterConfig from './router/RouterConfig'
import { AuthProvider, RequestingProvider, ToastProvider } from './providers'

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
