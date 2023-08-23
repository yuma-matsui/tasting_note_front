import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { LoadingSpinner } from '../components/atoms'
import { Error404Page, NewTastingSheetPage, PrivacyPolicyPage, TermOfServicePage } from '../components/pages'
import AuthErrorPage from '../components/pages/AuthErrorPage'
import { useAuthErrorContext, useAuthLoadingContext, useRequestingContext } from '../hooks'
import { ModalProvider } from '../providers'
import EditWinePageWrapper from './EditWinePageWrapper'
import NewWinePageWrapper from './NewWinePageWrapper'
import TastingSheetPageWrapper from './TastingSheetPageWrapper'
import WelcomePageWrapper from './WelcomePageWrapper'

const RouterConfig: FC = () => {
  const loading = useAuthLoadingContext()
  const error = useAuthErrorContext()
  const requesting = useRequestingContext()

  if (loading || requesting) return <LoadingSpinner />
  if (error) return <AuthErrorPage error={error} />

  return (
    <BrowserRouter>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<WelcomePageWrapper />} />
          {/* <Route path="/signin" element={<AuthPageWrapper page={<SignInPage />} />} />
          <Route path="/signup" element={<AuthPageWrapper page={<SignUpPage />} />} />
          <Route path="/reset_password" element={<AuthPageWrapper page={<ResetPasswordPage />} />} /> */}
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
      </ModalProvider>
    </BrowserRouter>
  )
}

export default RouterConfig
