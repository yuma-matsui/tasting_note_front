import { FC } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { NewWinePage } from '../components/pages'
import { TastingSheetStateForWine } from '../types'
import { useCurrentUserContext } from '../hooks'

const NewWinePageWrapper: FC = () => {
  const currentUser = useCurrentUserContext()
  const location = useLocation()
  const state = location.state as null | TastingSheetStateForWine

  return !currentUser || !state ? <Navigate to="/" /> : <NewWinePage />
}

export default NewWinePageWrapper
