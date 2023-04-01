import { TastingSheetApi } from '../../types'
import useAuthContext from '../context/useAuthContext'
import useRequestingContext from '../context/useRequestingContext'
import useTastingSheetsContext from '../context/useTastingSheetsContext'
import useToastContext from '../context/useToastContext'
import useAxios from '../useAxios'

const useDeleteTastingSheet = (id: number) => {
  const { client, getHeaders } = useAxios()
  const { currentUser } = useAuthContext()
  const { setTastingSheets } = useTastingSheetsContext()
  const { showToast } = useToastContext()
  const { setRequesting } = useRequestingContext()

  const onClickDelete = async () => {
    if (!currentUser) throw new Error('不正な呼び出し方です。')

    setRequesting(true)
    try {
      const { data: tastingSheetsApi } = await client.delete<TastingSheetApi[]>(
        `/tasting_sheets/${id}`,
        await getHeaders(currentUser)
      )
      setTastingSheets(tastingSheetsApi)
    } catch (e) {
      if (e instanceof Error) throw e
    } finally {
      setRequesting(false)
    }
    showToast('テイスティングシートを削除しました')
  }

  return {
    onClickDelete
  }
}

export default useDeleteTastingSheet
