import { FC } from 'react'
import { Navigate, useLocation, useParams } from 'react-router-dom'

import { EditWinePage } from '../components/pages'
import { useAuthContext } from '../hooks'
import { WineApi } from '../types'

const EditWinePageWrapper: FC = () => {
  const { currentUser } = useAuthContext()
  const { wineId } = useParams()
  const target = Number(wineId)
  const location = useLocation()
  const wine = location.state as null | WineApi

  const invalidAccess = !currentUser || Number.isNaN(target) || !wine

  return invalidAccess ? <Navigate to="/" /> : <EditWinePage wine={wine} />
}

export default EditWinePageWrapper
