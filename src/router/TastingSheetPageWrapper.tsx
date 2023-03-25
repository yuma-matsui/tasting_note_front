import { FC } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { TastingSheetDetailsPage } from '../components/pages'

import { useAuthContext } from '../hooks'

const TastingSheetPageWrapper: FC = () => {
  const { currentUser } = useAuthContext()

  const { tastingSheetId } = useParams()
  const id = Number(tastingSheetId)

  const invalidAccess = !currentUser || Number.isNaN(id)

  return invalidAccess ? <Navigate to="/" /> : <TastingSheetDetailsPage tastingSheetId={id} />
}

export default TastingSheetPageWrapper
