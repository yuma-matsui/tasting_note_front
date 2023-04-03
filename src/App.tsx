import { FC } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import RouterConfig from './router/RouterConfig'
import { AuthProvider, RequestingProvider, ToastProvider } from './providers'
import { ErrorFallback } from './components/pages'

const App: FC = () => (
  <ToastProvider>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <AuthProvider>
        <RequestingProvider>
          <RouterConfig />
        </RequestingProvider>
      </AuthProvider>
    </ErrorBoundary>
  </ToastProvider>
)

export default App
