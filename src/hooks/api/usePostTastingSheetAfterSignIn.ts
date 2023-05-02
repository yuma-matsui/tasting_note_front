import { useLayoutEffect } from 'react'
import { useErrorBoundary } from 'react-error-boundary'

import { TastingSheet } from '../../types'
import useAuthContext from '../context/useAuthContext'
import usePostTastingSheet from './usePostTastingSheet'
import { TASTING_SHEET_KEY } from '../../utils'

const usePostTastingSheetAfterSignIn = () => {
  const { showBoundary } = useErrorBoundary()

  const { currentUser } = useAuthContext()
  const { postTastingSheet } = usePostTastingSheet()

  useLayoutEffect(() => {
    const tastingSheet = window.localStorage.getItem(TASTING_SHEET_KEY)
    if (currentUser && tastingSheet) {
      const sheet = JSON.parse(tastingSheet) as TastingSheet
      postTastingSheet(sheet).catch((e: Error) => showBoundary(e))
    }
  }, [currentUser, postTastingSheet, showBoundary])
}

export default usePostTastingSheetAfterSignIn
