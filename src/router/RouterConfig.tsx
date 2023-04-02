import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Error404Page, NewTastingSheetPage } from '../components/pages'
import { useAuthContext, useRequestingContext } from '../hooks'
import { ModalProvider } from '../providers'
import EditWinePageWrapper from './EditWinePageWrapper'
import NewWinePageWrapper from './NewWinePageWrapper'
import TastingSheetPageWrapper from './TastingSheetPageWrapper'
import WelcomePageWrapper from './WelcomePageWrapper'

const RouterConfig: FC = () => {
  const { loading } = useAuthContext()
  const { requesting } = useRequestingContext()

  if (loading || requesting) return <p>...Loading</p>

  return (
    <BrowserRouter>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<WelcomePageWrapper />} />
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
