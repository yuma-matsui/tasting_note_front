import { useLayoutEffect, useState } from 'react'
import { useErrorBoundary } from 'react-error-boundary'

import { TastingSheetApi } from '../../types'
import useCurrentUserContext from '../context/useCurrentUserContext'
import useAxios from '../useAxios'

const useFetchTastingSheets = () => {
  const [tastingSheets, setTastingSheets] = useState<TastingSheetApi[]>([])
  const [fetching, setFetching] = useState(false)
  const { showBoundary } = useErrorBoundary()

  const { client, getHeaders } = useAxios()
  const currentUser = useCurrentUserContext()

  useLayoutEffect(() => {
    const fetchTastingSheets = async () => {
      if (!currentUser) return
      setFetching(true)

      try {
        const { data: tastingSheetsApi } = await client.get<TastingSheetApi[]>(
          '/tasting_sheets',
          await getHeaders(currentUser)
        )
        setTastingSheets(tastingSheetsApi)
      } catch (e) {
        if (e instanceof Error) showBoundary(e)
      } finally {
        setFetching(false)
      }
    }

    fetchTastingSheets().catch((e: Error) => showBoundary(e))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    fetching,
    hasTastingSheets: tastingSheets.length >= 1,
    tastingSheets
  }
}

export default useFetchTastingSheets
