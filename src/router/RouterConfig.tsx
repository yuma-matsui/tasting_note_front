import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { NewTastingSheetPage, SignedInWelcomePage, WelcomePage } from '../components/pages'
import { useAuthContext } from '../hooks'

const RouterConfig: FC = () => {
  const { currentUser, loading, error } = useAuthContext()

  if (error) return <p>やり直してください</p>
  if (loading) return <p>...Loading</p>

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={currentUser ? <SignedInWelcomePage /> : <WelcomePage />} />
        <Route path="/tasting_sheets">
          <Route path="new" element={<NewTastingSheetPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouterConfig
