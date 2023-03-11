import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { NewTastingSheetPage, SignedInWelcomePage, TastingSheetDetailsPage, WelcomePage } from '../components/pages'
import { useAuthContext, useTastingSheetsContext } from '../hooks'
import { ModalProvider } from '../providers'

const RouterConfig: FC = () => {
  const { currentUser, loading, error } = useAuthContext()
  const { requesting } = useTastingSheetsContext()

  if (error) return <p>やり直してください</p>
  if (loading || requesting) return <p>...Loading</p>

  return (
    <BrowserRouter>
      <ModalProvider>
        <Routes>
          <Route path="/" element={currentUser ? <SignedInWelcomePage /> : <WelcomePage />} />
          <Route path="/tasting_sheets">
            <Route path=":tastingSheetId" element={<TastingSheetDetailsPage />} />
            <Route path="new" element={<NewTastingSheetPage />} />
          </Route>
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  )
}

export default RouterConfig
