import { AuthError } from 'firebase/auth'
import { useEffect } from 'react'
import { useErrorBoundary } from 'react-error-boundary'

const useThrowAuthError = (error: Error | AuthError | undefined) => {
  const { showBoundary } = useErrorBoundary()

  useEffect(() => {
    if (error) showBoundary(error)
  }, [error, showBoundary])
}

export default useThrowAuthError
