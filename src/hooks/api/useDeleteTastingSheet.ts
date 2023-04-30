import { useErrorBoundary } from 'react-error-boundary'

import useAuthContext from '../context/useAuthContext'
import useRequestingContext from '../context/useRequestingContext'
import useToastContext from '../context/useToastContext'
import useAxios from '../useAxios'

const useDeleteTastingSheet = (id: number) => {
  const { client, getHeaders } = useAxios()
  const { currentUser } = useAuthContext()
  const { showToast } = useToastContext()
  const { setRequesting } = useRequestingContext()
  const { showBoundary } = useErrorBoundary()

  const onClickDelete = async () => {
    if (!currentUser) return
    setRequesting(true)

    try {
      await client.delete(`/tasting_sheets/${id}`, await getHeaders(currentUser))
    } catch (e) {
      if (e instanceof Error) showBoundary(e)
    } finally {
      setRequesting(false)
    }
    showToast({
      text: 'シートを削除しました',
      type: 'success'
    })
  }

  return {
    onClickDelete
  }
}

export default useDeleteTastingSheet
