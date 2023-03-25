import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { NewTastingSheetPage, TastingSheetDetailsPage } from '../components/pages'
import { useAuthContext, useTastingSheetsContext } from '../hooks'
import { ModalProvider } from '../providers'
import EditWinePageWrapper from './EditWinePageWrapper'
import NewWinePageWrapper from './NewWinePageWrapper'
import SignedInWrapper from './SignedInWrapper'
import WelcomePageWrapper from './WelcomePageWrapper'

const RouterConfig: FC = () => {
  const { loading, error } = useAuthContext()
  const { requesting } = useTastingSheetsContext()

  if (error) return <p>やり直してください</p>
  if (loading || requesting) return <p>...Loading</p>

  return (
    <BrowserRouter>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<WelcomePageWrapper />} />
          <Route path="/tasting_sheets">
            <Route path=":tastingSheetId" element={<SignedInWrapper page={<TastingSheetDetailsPage />} />} />
            <Route path="new" element={<NewTastingSheetPage />} />
          </Route>
          <Route path="/wines">
            <Route path="new" element={<NewWinePageWrapper />} />
            <Route path="edit">
              <Route path=":wineId" element={<EditWinePageWrapper />} />
            </Route>
          </Route>
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  )
}

export default RouterConfig
