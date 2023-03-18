import { FC } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { NewWinePage } from '../components/pages'
import { useAuthContext } from '../hooks'
import { SheetNameAndId } from '../types'

const NewWinePageWrapper: FC = () => {
  const { currentUser } = useAuthContext()
  const location = useLocation()
  const state = location.state as null | SheetNameAndId

  return !currentUser || !state ? <Navigate to="/" /> : <NewWinePage />
}

export default NewWinePageWrapper
