import { useNavigate } from 'react-router-dom'
import { useErrorBoundary } from 'react-error-boundary'

import { Wine } from '../../types'
import useAuthContext from '../context/useAuthContext'
import useToastContext from '../context/useToastContext'
import useAxios from '../useAxios'
import useRequestingContext from '../context/useRequestingContext'

const usePostWine = () => {
  const navigate = useNavigate()
  const { client, getHeaders } = useAxios()
  const { currentUser } = useAuthContext()
  const { showToast } = useToastContext()
  const { showBoundary } = useErrorBoundary()
  const { setRequesting } = useRequestingContext()

  const postWine = async (wine: Wine) => {
    if (!currentUser) return
    setRequesting(true)

    try {
      const { data: wineApi } = await client.post<Wine>('/wines', wine, await getHeaders(currentUser))
      navigate(`/tasting_sheets/${wineApi.tastingSheetId}`)
    } catch (e) {
      if (e instanceof Error) showBoundary(e)
    } finally {
      setRequesting(false)
    }
    showToast({
      text: 'ワインを登録しました'
    })
  }

  return {
    postWine
  }
}

export default usePostWine
