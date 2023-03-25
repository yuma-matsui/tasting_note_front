import { useParams } from 'react-router-dom'

import { TastingSheet, TastingSheetApi } from '../../types'
import useAuthContext from '../context/useAuthContext'
import useTastingSheetContext from '../context/useTastingSheetContext'
import useTastingSheetsContext from '../context/useTastingSheetsContext'
import useAxios from '../useAxios'

const useUpdateTastingSheetName = () => {
  const { tastingSheetId } = useParams()
  const target = Number(tastingSheetId)

  const { currentUser } = useAuthContext()
  const { setTastingSheet } = useTastingSheetContext()
  const { setRequesting } = useTastingSheetsContext()
  const { client, getHeaders } = useAxios()

  const updateSheetName = async (tastingSheet: TastingSheet) => {
    if (!currentUser || Number.isNaN(target)) throw new Error('不正な呼び出し方です。')
    setRequesting(true)

    try {
      const { data: tastingSheetApi } = await client.put<TastingSheetApi>(
        `/tasting_sheets/${target}`,
        tastingSheet,
        await getHeaders(currentUser)
      )
      setTastingSheet(tastingSheetApi)
    } catch (e) {
      if (e instanceof Error) throw e
    } finally {
      setRequesting(false)
    }
  }

  return {
    updateSheetName
  }
}

export default useUpdateTastingSheetName
