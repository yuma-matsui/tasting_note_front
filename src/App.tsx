import { FC } from 'react'
import { HelmetProvider } from 'react-helmet-async'

import RouterConfig from './router/RouterConfig'
import { AuthProvider, RequestingProvider, ToastProvider } from './providers'

const App: FC = () => (
  <HelmetProvider>
    <ToastProvider>
      <AuthProvider>
        <RequestingProvider>
          <RouterConfig />
        </RequestingProvider>
      </AuthProvider>
    </ToastProvider>
  </HelmetProvider>
)

export default App
