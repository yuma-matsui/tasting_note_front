import { FC, useMemo, useReducer } from 'react'

import { FlavorContext } from '../contexts'
import { flavorReducer } from '../reducers'
import { ReactNodeChildren } from '../types'

const FlavorProvider: FC<ReactNodeChildren> = ({ children }) => {
  const [flavor, dispatch] = useReducer(flavorReducer, {
    flavorFirstImpression: [],
    flavorFruit: [],
    flavorFlower: [],
    flavorSpice: [],
    flavorImpression: []
  })

  const flavorState = useMemo(
    () => ({
      flavor,
      dispatch
    }),
    [flavor]
  )

  return <FlavorContext.Provider value={flavorState}>{children}</FlavorContext.Provider>
}

export default FlavorProvider
