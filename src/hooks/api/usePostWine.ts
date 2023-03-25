import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Wine } from '../../types'
import useAuthContext from '../context/useAuthContext'
import useToastContext from '../context/useToastContext'
import useAxios from '../useAxios'

const usePostWine = () => {
  const navigate = useNavigate()
  const { client, getHeaders } = useAxios()
  const { currentUser } = useAuthContext()
  const { showToast } = useToastContext()

  const [posting, setPosting] = useState(false)

  const postWine = async (wine: Wine) => {
    setPosting(true)
    if (!currentUser) throw new Error('不正な呼び出し方です。')

    try {
      const { data: wineApi } = await client.post<Wine>('/wines', wine, await getHeaders(currentUser))
      navigate(`/tasting_sheets/${wineApi.tastingSheetId}`)
    } catch (e) {
      if (e instanceof Error) throw e
    } finally {
      setPosting(false)
    }
    showToast('ワインを登録しました')
  }

  return {
    posting,
    postWine
  }
}

export default usePostWine
