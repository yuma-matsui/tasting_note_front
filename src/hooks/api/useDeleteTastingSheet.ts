import useCurrentUserContext from '../context/useCurrentUserContext'
import useRequestingDispatchContext from '../context/useRequestingDispatchContext'
import useToastContext from '../context/useToastContext'
import useAxios from '../useAxios'

const useDeleteTastingSheet = (id: number) => {
  const { client, getHeaders } = useAxios()
  const currentUser = useCurrentUserContext()
  const { showToast } = useToastContext()
  const fetchAndChangeRequesting = useRequestingDispatchContext()

  const onClickDelete = async () => {
    if (!currentUser) return

    const fetchFunction = async () => {
      await client.delete(`/tasting_sheets/${id}`, await getHeaders(currentUser))
    }

    await fetchAndChangeRequesting(fetchFunction)
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
