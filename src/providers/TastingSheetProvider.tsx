import { FC, useMemo, useReducer } from 'react'
import { TastingSheetContext } from '../contexts'
import { tastingSheetReducer } from '../reducers'
import { ReactNodeChildren } from '../types'

const TastingSheetProvider: FC<ReactNodeChildren> = ({ children }) => {
  const [tastingSheet, dispatch] = useReducer(tastingSheetReducer, {
    name: '',
    time: null,
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
    },
    taste: {
      attack: '',
      sweetness: '',
      acidity: '',
      astringent: null,
      bitterness: null,
      alcohol: '',
      balance: '',
      afterTaste: ''
    },
    conclusion: {
      evaluation: '',
      optimumTemperature: '',
      glass: '',
      decantage: '',
      vintage: null,
      country: '',
      grape: ''
    }
  })

  const tastingSheetState = useMemo(() => ({ tastingSheet, dispatch }), [tastingSheet])

  return <TastingSheetContext.Provider value={tastingSheetState}>{children}</TastingSheetContext.Provider>
}

export default TastingSheetProvider
