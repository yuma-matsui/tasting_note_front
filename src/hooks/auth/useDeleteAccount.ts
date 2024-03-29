import { getAuth } from 'firebase/auth'
import { useDeleteUser } from 'react-firebase-hooks/auth'

import useAuthErrorDispatchContext from '../context/useAuthErrorDispatchContext'
import useAuthLoadingDispatchContext from '../context/useAuthLoadingDispatchContext'
import useCurrentUserContext from '../context/useCurrentUserContext'
import useAxios from '../useAxios'

const useDeleteAccount = () => {
  const currentUser = useCurrentUserContext()
  const setAuthLoading = useAuthLoadingDispatchContext()
  const setAuthError = useAuthErrorDispatchContext()
  const { client, getHeaders } = useAxios()
  const [deleteUser, , deleteError] = useDeleteUser(getAuth())

  const deleteAccount = async () => {
    if (!currentUser) return

    setAuthLoading(true)
    try {
      const headers = await getHeaders(currentUser)
      const { data: userId } = await client.get<number>('/users', headers)
      await client.delete(`/users/${userId}`, headers)
      await deleteUser()
    } catch (e) {
      if (e instanceof Error) setAuthError(deleteError ?? e)
    } finally {
      setAuthLoading(false)
    }
  }

  return {
    deleteAccount
  }
}

export default useDeleteAccount
