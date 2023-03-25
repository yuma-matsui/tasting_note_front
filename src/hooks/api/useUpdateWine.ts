import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Wine, WineApi } from '../../types'
import useAuthContext from '../context/useAuthContext'
import useToastContext from '../context/useToastContext'
import useAxios from '../useAxios'

const useUpdateWine = () => {
  const navigate = useNavigate()
  const { client, getHeaders } = useAxios()
  const { currentUser } = useAuthContext()
  const { showToast } = useToastContext()

  const [updating, setUpdating] = useState(false)

  const updateWine = async (wine: Wine, wineId: number) => {
    setUpdating(true)
    if (!currentUser) throw new Error('不正な呼び出し方です。')

    try {
      const { data: wineApi } = await client.put<WineApi>(`/wines/${wineId}`, wine, await getHeaders(currentUser))
      navigate(`/tasting_sheets/${wineApi.tastingSheetId}`)
    } catch (e) {
      if (e instanceof Error) throw e
    } finally {
      setUpdating(false)
    }
    showToast('ワインを更新しました')
  }

  return {
    updating,
    updateWine
  }
}

export default useUpdateWine
