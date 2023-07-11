import { User } from 'firebase/auth'
import { useErrorBoundary } from 'react-error-boundary'

import { TastingSheet } from '../../types'
import useCreateUser from '../auth/useCreateUser'
import useToastContext from '../context/useToastContext'
import usePostTastingSheet from './usePostTastingSheet'

const useSignUpOrInAndPostTastingSheet = () => {
  const { showToast } = useToastContext()
  const { showBoundary } = useErrorBoundary()
  const { postTastingSheet } = usePostTastingSheet()
  const { createUser } = useCreateUser()

  const signUpOrInAndPostTastingSheet = async ({
    tastingSheet,
    type,
    user
  }: {
    tastingSheet: TastingSheet | null
    type: 'signIn' | 'signUp'
    user: User | undefined
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
