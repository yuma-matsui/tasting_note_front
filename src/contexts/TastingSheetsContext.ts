import { createContext } from 'react'
import { TastingSheetsContextType } from '../types'

const TastingSheetsContext = createContext<TastingSheetsContextType>({
  tastingSheets: [],
  setTastingSheets: () => {}
})

export default TastingSheetsContext
