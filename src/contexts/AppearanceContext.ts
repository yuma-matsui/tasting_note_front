import { createContext } from 'react'
import { AppearanceContextType } from '../types'

const AppearanceContext = createContext<AppearanceContextType>({} as AppearanceContextType)

export default AppearanceContext
