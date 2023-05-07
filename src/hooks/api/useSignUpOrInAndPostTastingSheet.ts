import { User } from 'firebase/auth'
import { useErrorBoundary } from 'react-error-boundary'

import { TastingSheet } from '../../types'
import useToastContext from '../context/useToastContext'
import usePostTastingSheet from './usePostTastingSheet'
import useCreateUser from '../auth/useCreateUser'

const useSignUpOrInAndPostTastingSheet = () => {
  const { showToast } = useToastContext()
  const { showBoundary } = useErrorBoundary()
  const { postTastingSheet } = usePostTastingSheet()
  const { createUser } = useCreateUser()

  const signUpOrInAndPostTastingSheet = async ({
    user,
    tastingSheet,
    type
  }: {
    user: User | undefined
    tastingSheet: TastingSheet | null
    type: 'signIn' | 'signUp'
  }) => {
    const isSignUp = type === 'signUp'

    try {
      if (isSignUp && user) await createUser(user)
      if (tastingSheet) await postTastingSheet(tastingSheet, user)
      if (!tastingSheet && user)
        showToast({
          text: isSignUp ? '登録しました' : 'ログインしました',
          type: 'success'
        })
    } catch (e) {
      if (e instanceof Error) showBoundary(e)
    }
  }

  return {
    signUpOrInAndPostTastingSheet
  }
}

export default useSignUpOrInAndPostTastingSheet
