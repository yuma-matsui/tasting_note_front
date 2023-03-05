import { useLayoutEffect, useState } from 'react'

import { TastingSheetApi } from '../../types'
import useAuthContext from '../context/useAuthContext'
import useAxios from '../useAxios'
import useTastingSheetsContext from '../context/useTastingSheetsContext'

const useFetchTastingSheets = () => {
  const { client, getHeaders } = useAxios()
  const { currentUser } = useAuthContext()
  const { tastingSheets, setTastingSheets } = useTastingSheetsContext()

  if (!currentUser) throw new Error('不正な呼び出し方です。')

  const [fetching, setFetching] = useState(false)
  useLayoutEffect(() => {
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

    fetchTastingSheets().catch((e: Error) => {
      throw e
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    hasTastingSheets: tastingSheets.length >= 1,
    fetching
  }
}

export default useFetchTastingSheets
