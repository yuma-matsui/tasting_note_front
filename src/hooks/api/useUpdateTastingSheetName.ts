import { useParams } from 'react-router-dom'

import { TastingSheet } from '../../types'
import useAuthContext from '../context/useAuthContext'
import useToastContext from '../context/useToastContext'
import useAxios from '../useAxios'
import useRequestingContext from '../context/useRequestingContext'

const useUpdateTastingSheetName = () => {
  const { tastingSheetId } = useParams()
  const target = Number(tastingSheetId)

  const { currentUser } = useAuthContext()
  const { client, getHeaders } = useAxios()
  const { setRequesting } = useRequestingContext()
  const { showToast } = useToastContext()

  const updateSheetName = async (tastingSheet: TastingSheet) => {
    if (!currentUser || Number.isNaN(target)) return
    setRequesting(true)

    try {
      await client.put(`/tasting_sheets/${target}`, tastingSheet, await getHeaders(currentUser))
    } catch (e) {
      if (e instanceof Error) throw e
    } finally {
      setRequesting(false)
    }
    showToast('シート名を変更しました')
  }

  return {
    updateSheetName
  }
}

export default useUpdateTastingSheetName
