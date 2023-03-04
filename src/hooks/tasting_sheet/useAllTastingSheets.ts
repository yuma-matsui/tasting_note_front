import { useLayoutEffect, useState } from 'react'

import { TastingSheetApi } from '../../types'
import useAuthContext from '../useAuthContext'
import useAxios from '../useAxios'

const useAllTastingSheets = () => {
  const { client, getHeaders } = useAxios()
  const { currentUser, loading } = useAuthContext()

  if (!currentUser) throw new Error('不正な呼び出し方です。')

  const [tastingSheets, setTastingSheets] = useState<TastingSheetApi[]>([])
  const [fetching, setFetching] = useState(false)
  const fetchTastingSheets = async () => {
    setFetching(true)
    try {
      const response = (await client.get<TastingSheetApi[]>('/tasting_sheets', await getHeaders(currentUser))).data
      setTastingSheets(response)
    } catch (e) {
      if (e instanceof Error) throw e
    } finally {
      setFetching(false)
    }
  }

  useLayoutEffect(() => {
    if (!loading) {
      fetchTastingSheets().catch(() => {})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    tastingSheets,
    hasTastingSheets: tastingSheets.length >= 1,
    fetching
  }
}

export default useAllTastingSheets
