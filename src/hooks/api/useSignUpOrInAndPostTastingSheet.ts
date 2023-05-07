import { User } from 'firebase/auth'
import { useErrorBoundary } from 'react-error-boundary'

import { TastingSheet } from '../../types'
import useToastContext from '../context/useToastContext'
import usePostTastingSheet from './usePostTastingSheet'

const useSignUpOrInAndPostTastingSheet = () => {
  const { showToast } = useToastContext()
  const { showBoundary } = useErrorBoundary()
  const { postTastingSheet } = usePostTastingSheet()

  const signUpOrInAndPostTastingSheet = async ({
    user,
    tastingSheet,
    type
  }: {
    user: User | undefined
    tastingSheet: TastingSheet | null
    type: 'signIn' | 'signUp'
  }) => {
    try {
      if (tastingSheet) await postTastingSheet(tastingSheet, user)
      if (!tastingSheet && user)
        showToast({
          text: type === 'signIn' ? 'ログインしました' : '登録しました',
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
