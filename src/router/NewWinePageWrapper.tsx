import { FC } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { NewWinePage } from '../components/pages'
import { useCurrentUserContext } from '../hooks'
import { TastingSheetStateForWine } from '../types'

const NewWinePageWrapper: FC = () => {
  const currentUser = useCurrentUserContext()
  const location = useLocation()
  const state = location.state as null | TastingSheetStateForWine

  return !currentUser || !state ? <Navigate to="/" /> : <NewWinePage />
}

export default NewWinePageWrapper
