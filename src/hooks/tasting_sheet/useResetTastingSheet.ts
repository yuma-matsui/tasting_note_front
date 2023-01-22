import { useEffect } from 'react'
import { initialTastingSheet } from '../../utils'

import useTastingSheetContext from './useTastingSheetContext'

const useResetTastingSheet = () => {
  const { setTastingSheet } = useTastingSheetContext()

  useEffect(() => () => setTastingSheet({ ...initialTastingSheet }), [setTastingSheet])
}

export default useResetTastingSheet
