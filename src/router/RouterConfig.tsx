import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NewTastingSheetPage, WelcomePage } from '../components/pages'

const RouterConfig: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/tasting_sheets">
        <Route path="new" element={<NewTastingSheetPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default RouterConfig
