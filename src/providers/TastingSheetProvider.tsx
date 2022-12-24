import { FC, useMemo, useState } from 'react'
import { TASTING_TIME } from '../assets'
import { TastingSheetContext } from '../contexts'
import { ReactNodeChildren, TastingSheet } from '../types'

const TastingSheetProvider: FC<ReactNodeChildren> = ({ children }) => {
  const [tastingSheet, setTastingSheet] = useState<TastingSheet>({
    name: '',
    time: Math.min(...TASTING_TIME),
    color: 'white'
  })

  const tastingSheetState = useMemo(() => ({ tastingSheet, setTastingSheet }), [tastingSheet])

  return <TastingSheetContext.Provider value={tastingSheetState}>{children}</TastingSheetContext.Provider>
}

export default TastingSheetProvider
