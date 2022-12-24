import { FC, useMemo, useState } from 'react'
import { TastingSheetContext } from '../contexts'
import { ReactNodeChildren, TastingSheet } from '../types'

const TastingSheetProvider: FC<ReactNodeChildren> = ({ children }) => {
  const [tastingSheet, setTastingSheet] = useState<TastingSheet>({
    name: '',
    time: 3,
    color: 'white',
  })

  const tastingSheetState = useMemo(() => ({ tastingSheet, setTastingSheet }), [tastingSheet])

  return <TastingSheetContext.Provider value={tastingSheetState}>{children}</TastingSheetContext.Provider>
}

export default TastingSheetProvider
