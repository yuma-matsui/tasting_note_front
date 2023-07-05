import { useNavigate } from 'react-router-dom'

import { Wine } from '../../types'
import useAuthContext from '../context/useAuthContext'
import useToastContext from '../context/useToastContext'
import useAxios from '../useAxios'
import useRequestingDispatchContext from '../context/useRequestingDispatchContext'

const usePostWine = () => {
  const navigate = useNavigate()
  const { client, getHeaders } = useAxios()
  const { currentUser } = useAuthContext()
  const { showToast } = useToastContext()
  const fetchAndChangeRequesting = useRequestingDispatchContext()

  const postWine = async (wine: Wine) => {
    if (!currentUser) return
    const fetchFunction = async () => {
      const { data: wineApi } = await client.post<Wine>('/wines', wine, await getHeaders(currentUser))
      navigate(`/tasting_sheets/${wineApi.tastingSheetId}`)
    }

    await fetchAndChangeRequesting(fetchFunction)
    showToast({
      text: 'ワインを登録しました',
      type: 'success'
    })
  }

  return {
    postWine
  }
}

export default usePostWine
