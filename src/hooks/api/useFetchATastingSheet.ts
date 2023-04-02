import { useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useErrorBoundary } from 'react-error-boundary'

import { TastingSheetApi } from '../../types'
import { initialTastingSheet } from '../../utils'
import useAuthContext from '../context/useAuthContext'
import useAxios from '../useAxios'

const useFetchATastingSheet = (tastingSheetId: number) => {
  const navigate = useNavigate()
  const { showBoundary } = useErrorBoundary()

  const { client, getHeaders } = useAxios()
  const { currentUser } = useAuthContext()

  const [tastingSheet, setTastingSheet] = useState<TastingSheetApi>({
    ...initialTastingSheet,
    id: 0,
    createdAt: '',
    wine: null
  })
  const [fetching, setFetching] = useState(false)

  useLayoutEffect(() => {
    const fetchATastingSheet = async () => {
      if (!currentUser) return
      setFetching(true)

      try {
        const { data: tastingSheetApi } = await client.get<TastingSheetApi | null>(
          `/tasting_sheets/${tastingSheetId}`,
          await getHeaders(currentUser)
        )
        if (!tastingSheetApi) navigate('/')
        if (tastingSheetApi) setTastingSheet(tastingSheetApi)
      } catch (e) {
        if (e instanceof Error) showBoundary(e)
      } finally {
        setFetching(false)
      }
    }

    fetchATastingSheet().catch((e: Error) => showBoundary(e))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    fetching,
    tastingSheet
  }
}

export default useFetchATastingSheet
