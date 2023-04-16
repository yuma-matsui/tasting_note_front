import { useErrorBoundary } from 'react-error-boundary'
import { TastingSheet } from '../../types'
import useAuthContext from '../context/useAuthContext'
import usePostTastingSheet from './usePostTastingSheet'

const useSignInAndPostTastingSheet = () => {
  const { signIn } = useAuthContext()
  const { postTastingSheet } = usePostTastingSheet()
  const { showBoundary } = useErrorBoundary()

  const signInAndPostTastingSheet = async (tastingSheet: TastingSheet) => {
    try {
      await postTastingSheet(tastingSheet, (await signIn())?.user)
    } catch (e) {
      if (e instanceof Error) showBoundary(e)
    }
  }

  return {
    signInAndPostTastingSheet
  }
}

export default useSignInAndPostTastingSheet
