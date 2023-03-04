import { FC, useMemo, useState } from 'react'
import { TastingSheetContext } from '../contexts'

import { ReactNodeChildren, TastingSheet } from '../types'
import { initialTastingSheet } from '../utils'

const TastingSheetProvider: FC<ReactNodeChildren> = ({ children }) => {
  const [tastingSheet, setTastingSheet] = useState<TastingSheet>(initialTastingSheet)
  const [requesting, setRequesting] = useState(false)

  const tastingSheetState = useMemo(
    () => ({ tastingSheet, setTastingSheet, requesting, setRequesting }),
    [tastingSheet, requesting]
  )

  return <TastingSheetContext.Provider value={tastingSheetState}>{children}</TastingSheetContext.Provider>
}

export default TastingSheetProvider
