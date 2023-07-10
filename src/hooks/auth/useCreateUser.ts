import { User } from 'firebase/auth'
import { useErrorBoundary } from 'react-error-boundary'

import useAxios from '../useAxios'

const useCreateUser = () => {
  const { client, getHeaders } = useAxios()
  const { showBoundary } = useErrorBoundary()

  const createUser = async (user: User) => {
    try {
      const userParams = {
        email: user.email,
        uid: user.uid
      }
      await client.post('/users', { user: userParams }, await getHeaders(user))
    } catch (e) {
      if (e instanceof Error) showBoundary(e)
    }
  }

  return {
    createUser
  }
}

export default useCreateUser
