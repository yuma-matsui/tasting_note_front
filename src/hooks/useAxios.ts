import { User } from 'firebase/auth'

import { client } from '../lib/index'

const useAxios = () => {
  const getHeaders = async (user: User) => {
    const idToken = await user.getIdToken(true)
    return {
      headers: {
        Authorization: `Bearer ${idToken}`
      }
    }
  }

  return {
    client,
    getHeaders
  }
}

export default useAxios
