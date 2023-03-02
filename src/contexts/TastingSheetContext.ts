import { createContext } from 'react'
import { TastingSheetContextType } from '../types'
import { initialTastingSheet } from '../utils'

const TastingSheetContext = createContext<TastingSheetContextType>({
  tastingSheet: initialTastingSheet,
  setTastingSheet: () => {},
  requesting: false,
  setRequesting: () => {}
})

export default TastingSheetContext
