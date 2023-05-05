import { useDeleteUser } from 'react-firebase-hooks/auth'
import { auth } from '../../lib'
import useAuthContext from '../context/useAuthContext'
import useAxios from '../useAxios'

const useDeleteAccount = () => {
  const { currentUser, setAuthLoading, setAuthError } = useAuthContext()
  const { client, getHeaders } = useAxios()
  const [deleteUser, , deleteError] = useDeleteUser(auth)

  const deleteAccount = async () => {
    if (!currentUser) return

    setAuthLoading(true)
    try {
      const headers = await getHeaders(currentUser)
      const { data: userId } = await client.get<number>('/sessions', headers)
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
