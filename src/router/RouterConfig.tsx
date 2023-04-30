import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

import {
  Error404Page,
  ErrorFallbackForApi,
  NewTastingSheetPage,
  PrivacyPolicyPage,
  TermOfServicePage
} from '../components/pages'
import { useAuthContext, useRequestingContext } from '../hooks'
import { ModalProvider } from '../providers'
import { LoadingSpinner } from '../components/atoms'
import EditWinePageWrapper from './EditWinePageWrapper'
import NewWinePageWrapper from './NewWinePageWrapper'
import TastingSheetPageWrapper from './TastingSheetPageWrapper'
import WelcomePageWrapper from './WelcomePageWrapper'

const RouterConfig: FC = () => {
  const { loading } = useAuthContext()
  const { requesting } = useRequestingContext()

  if (loading || requesting) return <LoadingSpinner />

  return (
    <BrowserRouter>
      <ModalProvider>
        <ErrorBoundary FallbackComponent={ErrorFallbackForApi}>
          <Routes>
            <Route path="/" element={<WelcomePageWrapper />} />
            <Route path="/pp" element={<PrivacyPolicyPage />} />
            <Route path="/tos" element={<TermOfServicePage />} />
            <Route path="/tasting_sheets">
              <Route index element={<Error404Page />} />
              <Route path=":tastingSheetId" element={<TastingSheetPageWrapper />} />
              <Route path="new" element={<NewTastingSheetPage />} />
            </Route>
            <Route path="/wines">
              <Route index element={<Error404Page />} />
              <Route path="new" element={<NewWinePageWrapper />} />
              <Route path="edit">
                <Route path=":wineId" element={<EditWinePageWrapper />} />
              </Route>
            </Route>
            <Route path="*" element={<Error404Page />} />
          </Routes>
        </ErrorBoundary>
      </ModalProvider>
    </BrowserRouter>
  )
}

export default RouterConfig
