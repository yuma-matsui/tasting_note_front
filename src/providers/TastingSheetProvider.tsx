import { FC, useMemo, useState } from 'react'
import { TastingSheetContext } from '../contexts'

import { ReactNodeChildren, TastingSheet } from '../types'
import { initialTastingSheet } from '../utils'

const TastingSheetProvider: FC<ReactNodeChildren> = ({ children }) => {
  const [tastingSheet, setTastingSheet] = useState<TastingSheet>(initialTastingSheet)
  const [posting, setPosting] = useState(false)

  const tastingSheetState = useMemo(
    () => ({ tastingSheet, setTastingSheet, posting, setPosting }),
    [tastingSheet, posting]
  )

  return <TastingSheetContext.Provider value={tastingSheetState}>{children}</TastingSheetContext.Provider>
}

export default TastingSheetProvider
