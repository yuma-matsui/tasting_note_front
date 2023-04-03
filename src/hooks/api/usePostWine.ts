import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useErrorBoundary } from 'react-error-boundary'

import { Wine } from '../../types'
import useAuthContext from '../context/useAuthContext'
import useToastContext from '../context/useToastContext'
import useAxios from '../useAxios'

const usePostWine = () => {
  const navigate = useNavigate()
  const { client, getHeaders } = useAxios()
  const { currentUser } = useAuthContext()
  const { showToast } = useToastContext()
  const { showBoundary } = useErrorBoundary()

  const [posting, setPosting] = useState(false)

  const postWine = async (wine: Wine) => {
    if (!currentUser) return
    setPosting(true)

    try {
      const { data: wineApi } = await client.post<Wine>('/wines', wine, await getHeaders(currentUser))
      navigate(`/tasting_sheets/${wineApi.tastingSheetId}`)
    } catch (e) {
      if (e instanceof Error) showBoundary(e)
    } finally {
      setPosting(false)
    }
    showToast({
      text: 'ワインを登録しました'
    })
  }

  return {
    posting,
    postWine
  }
}

export default usePostWine
