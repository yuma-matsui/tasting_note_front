import { createContext } from 'react'
import { TastingSheetContextType } from '../types'
import { initialTastingSheet } from '../utils'

const TastingSheetContext = createContext<TastingSheetContextType>({
  tastingSheet: initialTastingSheet,
  setTastingSheet: () => {},
  posting: false,
  setPosting: () => {}
})

export default TastingSheetContext
