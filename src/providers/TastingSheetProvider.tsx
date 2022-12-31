import { FC, useMemo, useReducer } from 'react'
import { TASTING_TIME } from '../assets'
import { TastingSheetContext } from '../contexts'
import { tastingSheetReducer } from '../reducers'
import { ReactNodeChildren } from '../types'

const TastingSheetProvider: FC<ReactNodeChildren> = ({ children }) => {
  const [tastingSheet, dispatch] = useReducer(tastingSheetReducer, {
    name: '',
    time: Math.min(...TASTING_TIME),
    color: 'white',
    appearance: {
      clarity: '',
      brightness: '',
      appearanceColor: [],
      intensity: '',
      consistency: '',
      appearanceImpression: []
    },
    flavor: {
      flavorFirstImpression: [],
      flavorFruit: [],
      flavorFlower: [],
      flavorSpice: [],
      flavorImpression: []
    }
  })

  const tastingSheetState = useMemo(() => ({ tastingSheet, dispatch }), [tastingSheet])

  return <TastingSheetContext.Provider value={tastingSheetState}>{children}</TastingSheetContext.Provider>
}

export default TastingSheetProvider
