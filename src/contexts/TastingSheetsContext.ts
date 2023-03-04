import { createContext } from 'react'
import { TastingSheetsContextType } from '../types'

const TastingSheetsContext = createContext<TastingSheetsContextType>({
  tastingSheets: [],
  setTastingSheets: () => {},
  requesting: false,
  setRequesting: () => {}
})

export default TastingSheetsContext
