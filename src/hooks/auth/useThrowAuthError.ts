import { AuthError } from 'firebase/auth'
import { useEffect } from 'react'

const useThrowAuthError = (error: Error | AuthError | undefined) => {
  useEffect(() => {
    if (error) throw error
  }, [error])
}

export default useThrowAuthError
