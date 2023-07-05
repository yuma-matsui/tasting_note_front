import { useParams } from 'react-router-dom'

import { TastingSheet } from '../../types'
import useToastContext from '../context/useToastContext'
import useAxios from '../useAxios'
import useRequestingDispatchContext from '../context/useRequestingDispatchContext'
import useCurrentUserContext from '../context/useCurrentUserContext'

const useUpdateTastingSheetName = () => {
  const { tastingSheetId } = useParams()
  const target = Number(tastingSheetId)

  const currentUser = useCurrentUserContext()
  const { client, getHeaders } = useAxios()
  const { showToast } = useToastContext()
  const fetchAndChangeRequesting = useRequestingDispatchContext()

  const updateSheetName = async (tastingSheet: TastingSheet) => {
    if (!currentUser || Number.isNaN(target)) return
    const fetchFunction = async () => {
      await client.put(`/tasting_sheets/${target}`, tastingSheet, await getHeaders(currentUser))
    }

    await fetchAndChangeRequesting(fetchFunction)
    showToast({
      text: 'シート名を変更しました',
      type: 'success'
    })
  }

  return {
    updateSheetName
  }
}

export default useUpdateTastingSheetName
