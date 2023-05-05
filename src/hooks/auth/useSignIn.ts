import { getAuth, getRedirectResult } from 'firebase/auth'
import { useLayoutEffect } from 'react'
import { useErrorBoundary } from 'react-error-boundary'

import { TASTING_SHEET_KEY } from '../../utils'
import useAuthContext from '../context/useAuthContext'
import useAfterSignInFunctions from './useAfterSignInFunctions'
import { TastingSheet } from '../../types'

const useSignIn = () => {
  const { currentUser, setAuthError } = useAuthContext()
  const { goToTopPageAndShowToast, postSheetAfterSignIn } = useAfterSignInFunctions()
  const { showBoundary } = useErrorBoundary()

  const tastingSheet = window.localStorage.getItem(TASTING_SHEET_KEY)

  useLayoutEffect(() => {
    const getCurrentUser = async () => {
      try {
        const user = await getRedirectResult(getAuth())
        if (user?.user && !tastingSheet) goToTopPageAndShowToast()
        if (user?.user && tastingSheet) {
          postSheetAfterSignIn(JSON.parse(tastingSheet) as TastingSheet).catch((e: Error) => showBoundary(e))
        }
      } catch (e) {
        if (e instanceof Error) setAuthError(e)
      }
    }

    if (currentUser) getCurrentUser().catch((e: Error) => setAuthError(e))
  }, [setAuthError, currentUser, showBoundary, tastingSheet, goToTopPageAndShowToast, postSheetAfterSignIn])
}

export default useSignIn
