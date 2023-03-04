import { TastingSheetApi } from '../../types'
import useAuthContext from '../context/useAuthContext'
import useTastingSheetsContext from '../context/useTastingSheetsContext'
import useAxios from '../useAxios'

const useDeleteTastingSheet = (id: number) => {
  const { client, getHeaders } = useAxios()
  const { currentUser } = useAuthContext()
  const { setTastingSheets, setRequesting } = useTastingSheetsContext()

  const onClickDelete = async () => {
    if (!currentUser) throw new Error('不正な呼び出し方です。')

    setRequesting(true)
    try {
      const response = (await client.delete<TastingSheetApi[]>(`/tasting_sheets/${id}`, await getHeaders(currentUser)))
        .data
      setTastingSheets(response)
    } catch (e) {
      if (e instanceof Error) throw e
    } finally {
      setRequesting(false)
    }
  }

  return {
    onClickDelete
  }
}

export default useDeleteTastingSheet
