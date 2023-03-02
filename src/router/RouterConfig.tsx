import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { NewTastingSheetPage, SignedInWelcomePage, TastingSheetDetailPage, WelcomePage } from '../components/pages'
import { useAuthContext, useTastingSheetContext } from '../hooks'

const RouterConfig: FC = () => {
  const { currentUser, loading, error } = useAuthContext()
  const { requesting } = useTastingSheetContext()

  if (error) return <p>やり直してください</p>
  if (loading || requesting) return <p>...Loading</p>

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={currentUser ? <SignedInWelcomePage /> : <WelcomePage />} />
        <Route path="/tasting_sheets">
          <Route path=":tastingSheetId" element={<TastingSheetDetailPage />} />
          <Route path="new" element={<NewTastingSheetPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouterConfig
