import { FC } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { HelmetProvider } from 'react-helmet-async'

import { ErrorFallbackForApi } from './components/pages'
import { AuthProvider, RequestingProvider, ToastProvider } from './providers'
import RouterConfig from './router/RouterConfig'

const App: FC = () => (
  <HelmetProvider>
    <ToastProvider>
      <AuthProvider>
        <ErrorBoundary FallbackComponent={ErrorFallbackForApi}>
          <RequestingProvider>
            <RouterConfig />
          </RequestingProvider>
        </ErrorBoundary>
      </AuthProvider>
    </ToastProvider>
  </HelmetProvider>
)

export default App
