import { useNavigate } from 'react-router-dom'

import { WineApi } from '../../types'
import useToastContext from '../context/useToastContext'
import useAxios from '../useAxios'
import useRequestingDispatchContext from '../context/useRequestingDispatchContext'
import useCurrentUserContext from '../context/useCurrentUserContext'

const useDeleteWine = (wine: WineApi) => {
  const navigate = useNavigate()
  const currentUser = useCurrentUserContext()
  const { client, getHeaders } = useAxios()
  const { showToast } = useToastContext()
  const fetchAndChangeRequesting = useRequestingDispatchContext()

  const onClickDeleteWine = async () => {
    if (!currentUser) return
    const fetchFunction = async () => {
      await client.delete(`/wines/${wine.id}`, await getHeaders(currentUser))
      navigate(`/tasting_sheets/${wine.tastingSheetId}`)
    }

    await fetchAndChangeRequesting(fetchFunction)
    showToast({
      text: 'ワインを削除しました',
      type: 'success'
    })
  }

  return {
    onClickDeleteWine
  }
}

export default useDeleteWine
