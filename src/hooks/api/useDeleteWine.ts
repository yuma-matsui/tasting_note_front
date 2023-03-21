import { useNavigate } from 'react-router-dom'

import { WineApi } from '../../types'
import useAuthContext from '../context/useAuthContext'
import useTastingSheetsContext from '../context/useTastingSheetsContext'
import useToastContext from '../context/useToastContext'
import useAxios from '../useAxios'

const useDeleteWine = (wine: WineApi) => {
  const navigate = useNavigate()
  const { currentUser } = useAuthContext()
  const { client, getHeaders } = useAxios()
  const { setRequesting } = useTastingSheetsContext()
  const { showToast } = useToastContext()

  const onClickDeleteWine = async () => {
    if (!currentUser) throw new Error('不正な呼び出し方です。')

    setRequesting(true)
    try {
      await client.delete(`/wines/${wine.id}`, await getHeaders(currentUser))
      navigate(`/tasting_sheets/${wine.tastingSheetId}`)
    } catch (e) {
      if (e instanceof Error) throw e
    } finally {
      setRequesting(false)
    }
    showToast('ワインを削除しました')
  }

  return {
    onClickDeleteWine
  }
}

export default useDeleteWine
