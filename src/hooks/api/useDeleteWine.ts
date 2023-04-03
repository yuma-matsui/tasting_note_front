import { useNavigate } from 'react-router-dom'
import { useErrorBoundary } from 'react-error-boundary'

import { WineApi } from '../../types'
import useAuthContext from '../context/useAuthContext'
import useToastContext from '../context/useToastContext'
import useAxios from '../useAxios'
import useRequestingContext from '../context/useRequestingContext'

const useDeleteWine = (wine: WineApi) => {
  const navigate = useNavigate()
  const { currentUser } = useAuthContext()
  const { client, getHeaders } = useAxios()
  const { showToast } = useToastContext()
  const { setRequesting } = useRequestingContext()
  const { showBoundary } = useErrorBoundary()

  const onClickDeleteWine = async () => {
    if (!currentUser) return
    setRequesting(true)

    try {
      await client.delete(`/wines/${wine.id}`, await getHeaders(currentUser))
      navigate(`/tasting_sheets/${wine.tastingSheetId}`)
    } catch (e) {
      if (e instanceof Error) showBoundary(e)
    } finally {
      setRequesting(false)
    }
    showToast({
      text: 'ワインを削除しました'
    })
  }

  return {
    onClickDeleteWine
  }
}

export default useDeleteWine
