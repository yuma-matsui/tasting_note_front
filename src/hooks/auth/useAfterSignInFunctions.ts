import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useErrorBoundary } from 'react-error-boundary'

import useToastContext from '../context/useToastContext'
import { TastingSheet } from '../../types'
import usePostTastingSheet from '../api/usePostTastingSheet'

const useAfterSignInFunctions = () => {
  const navigate = useNavigate()
  const { showToast } = useToastContext()
  const { postTastingSheet } = usePostTastingSheet()
  const { showBoundary } = useErrorBoundary()

  const goToTopPageAndShowToast = useCallback(() => {
    navigate('/')
    showToast({
      text: 'ログインしました',
      type: 'success'
    })
  }, [navigate, showToast])

  const postSheetAfterSignIn = useCallback(
    async (localStorageSheet: string) => {
      const sheet = JSON.parse(localStorageSheet) as TastingSheet
      try {
        await postTastingSheet(sheet)
      } catch (e) {
        if (e instanceof Error) showBoundary(e)
      }
    },
    [postTastingSheet, showBoundary]
  )

  return {
    goToTopPageAndShowToast,
    postSheetAfterSignIn
  }
}

export default useAfterSignInFunctions
