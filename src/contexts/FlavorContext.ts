import { createContext } from 'react'
import { FlavorContextType } from '../types'

const FlavorContext = createContext<FlavorContextType>({} as FlavorContextType)

export default FlavorContext
