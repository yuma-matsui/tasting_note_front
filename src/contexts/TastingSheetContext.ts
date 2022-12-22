import { createContext } from 'react'
import { TastingSheetContextType } from '../types'

const TastingSheetContext = createContext<TastingSheetContextType>({} as TastingSheetContextType)

export default TastingSheetContext
