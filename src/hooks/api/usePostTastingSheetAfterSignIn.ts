import { useLayoutEffect } from 'react'

import { TastingSheet } from '../../types'
import useAuthContext from '../context/useAuthContext'
import usePostTastingSheet from './usePostTastingSheet'
import { TASTING_SHEET_KEY } from '../../utils'

const usePostTastingSheetAfterSignIn = () => {
  const { currentUser } = useAuthContext()
  const { postTastingSheet } = usePostTastingSheet()

  useLayoutEffect(() => {
    const tastingSheet = window.localStorage.getItem(TASTING_SHEET_KEY)
    if (currentUser && tastingSheet) {
      const sheet = JSON.parse(tastingSheet) as TastingSheet
      postTastingSheet(sheet).catch((e: Error) => {
        throw e
      })
    }
  }, [currentUser, postTastingSheet])
}

export default usePostTastingSheetAfterSignIn
