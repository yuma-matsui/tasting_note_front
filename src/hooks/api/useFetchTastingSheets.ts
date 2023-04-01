import { useLayoutEffect, useState } from 'react'

import { TastingSheetApi } from '../../types'
import useAuthContext from '../context/useAuthContext'
import useAxios from '../useAxios'

const useFetchTastingSheets = () => {
  const [tastingSheets, setTastingSheets] = useState<TastingSheetApi[]>([])
  const [fetching, setFetching] = useState(false)

  const { client, getHeaders } = useAxios()
  const { currentUser } = useAuthContext()

  if (!currentUser) throw new Error('不正な呼び出し方です。')

  useLayoutEffect(() => {
    const fetchTastingSheets = async () => {
      setFetching(true)
      try {
        const { data: tastingSheetsApi } = await client.get<TastingSheetApi[]>(
          '/tasting_sheets',
          await getHeaders(currentUser)
        )
        setTastingSheets(tastingSheetsApi)
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
    tastingSheets,
    hasTastingSheets: tastingSheets.length >= 1,
    fetching
  }
}

export default useFetchTastingSheets
