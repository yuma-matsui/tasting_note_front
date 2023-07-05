import { useNavigate } from 'react-router-dom'

import { Wine, WineApi } from '../../types'
import useAuthContext from '../context/useAuthContext'
import useToastContext from '../context/useToastContext'
import useAxios from '../useAxios'
import useRequestingDispatchContext from '../context/useRequestingDispatchContext'

const useUpdateWine = () => {
  const navigate = useNavigate()
  const { client, getHeaders } = useAxios()
  const { currentUser } = useAuthContext()
  const { showToast } = useToastContext()
  const fetchAndChangeRequesting = useRequestingDispatchContext()

  const updateWine = async (wine: Wine, wineId: number) => {
    if (!currentUser) return
    const fetchFunction = async () => {
      const { data: wineApi } = await client.put<WineApi>(`/wines/${wineId}`, wine, await getHeaders(currentUser))
      navigate(`/tasting_sheets/${wineApi.tastingSheetId}`)
    }

    await fetchAndChangeRequesting(fetchFunction)
    showToast({
      text: 'ワインを更新しました',
      type: 'success'
    })
  }

  return {
    updateWine
  }
}

export default useUpdateWine
