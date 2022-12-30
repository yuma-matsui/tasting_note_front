import { FC, useMemo, useReducer } from 'react'
import { AppearanceContext } from '../contexts'
import { appearanceReducer } from '../reducers'
import { ReactNodeChildren } from '../types'

const AppearanceProvider: FC<ReactNodeChildren> = ({ children }) => {
  const [appearance, dispatch] = useReducer(appearanceReducer, {
    clarity: '',
    brightness: '',
    appearanceColor: [],
    intensity: '',
    consistency: '',
    appearanceImpression: []
  })

  const appearanceState = useMemo(
    () => ({
      appearance,
      dispatch
    }),
    [appearance]
  )

  return <AppearanceContext.Provider value={appearanceState}>{children}</AppearanceContext.Provider>
}

export default AppearanceProvider
