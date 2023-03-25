import { useCallback, useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { TastingSheetApi } from '../../types'
import { initialTastingSheet } from '../../utils'
import useAuthContext from '../context/useAuthContext'
import useAxios from '../useAxios'

const useFetchATastingSheet = (tastingSheetId: number) => {
  const navigate = useNavigate()

  const { client, getHeaders } = useAxios()
  const { currentUser } = useAuthContext()

  const [tastingSheet, setTastingSheet] = useState<TastingSheetApi>({
    ...initialTastingSheet,
    id: 0,
    createdAt: '',
    wine: null
  })
  const [fetching, setFetching] = useState(false)
  const fetchATastingSheet = useCallback(async () => {
    setFetching(true)
    if (!currentUser) throw new Error('不正な呼び出し方です。')

    try {
      const { data: tastingSheetApi } = await client.get<TastingSheetApi | null>(
        `/tasting_sheets/${tastingSheetId}`,
        await getHeaders(currentUser)
      )
      if (!tastingSheetApi) navigate('/')
      if (tastingSheetApi) setTastingSheet(tastingSheetApi)
    } catch (e) {
      if (e instanceof Error) throw e
    } finally {
      setFetching(false)
    }
  }, [currentUser, client, tastingSheetId, getHeaders, navigate])

  useLayoutEffect(() => {
    if (currentUser)
      fetchATastingSheet().catch((e: Error) => {
        throw e
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser])

  return {
    fetching,
    tastingSheet
  }
}

export default useFetchATastingSheet
