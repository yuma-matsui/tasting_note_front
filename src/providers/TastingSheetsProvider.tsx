import { FC, useMemo, useState } from 'react'
import { TastingSheetsContext } from '../contexts'

import { ReactNodeChildren, TastingSheetApi } from '../types'

const TastingSheetsProvider: FC<ReactNodeChildren> = ({ children }) => {
  const [tastingSheets, setTastingSheets] = useState<TastingSheetApi[]>([])
  const [requesting, setRequesting] = useState(false)

  const tastingSheetsState = useMemo(
    () => ({ tastingSheets, setTastingSheets, requesting, setRequesting }),
    [tastingSheets, requesting]
  )

  return <TastingSheetsContext.Provider value={tastingSheetsState}>{children}</TastingSheetsContext.Provider>
}

export default TastingSheetsProvider
