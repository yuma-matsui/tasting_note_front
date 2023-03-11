import { useCallback, useLayoutEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { TastingSheetApi } from '../../types'
import useAuthContext from '../context/useAuthContext'
import useTastingSheetContext from '../context/useTastingSheetContext'
import useAxios from '../useAxios'

const useFetchATastingSheet = () => {
  const navigate = useNavigate()
  const { tastingSheetId } = useParams()
  const target = Number(tastingSheetId)

  const { client, getHeaders } = useAxios()
  const { setTastingSheet } = useTastingSheetContext()
  const { currentUser } = useAuthContext()

  const [fetching, setFetching] = useState(false)
  const fetchATastingSheet = useCallback(async () => {
    setFetching(true)
    if (!currentUser) return

    try {
      const response = (
        await client.get<TastingSheetApi | null>(`/tasting_sheets/${target}`, await getHeaders(currentUser))
      ).data
      if (response) setTastingSheet(response)
      if (!response) navigate('/')
    } catch (e) {
      if (e instanceof Error) throw e
    } finally {
      setFetching(false)
    }
  }, [currentUser, client, target, getHeaders, navigate, setTastingSheet])

  useLayoutEffect(() => {
    if (currentUser)
      fetchATastingSheet().catch((e: Error) => {
        throw e
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser])

  return {
    fetching
  }
}

export default useFetchATastingSheet
