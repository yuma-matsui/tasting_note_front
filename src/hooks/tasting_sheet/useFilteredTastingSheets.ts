import { useState } from 'react'

import { TastingSheetApi, TastingSheetFilter } from '../../types'
import { FILTER_DEFAULT_VALUE, initialFilter } from '../../utils'

const useFilteredTastingSheets = (tastingSheets: TastingSheetApi[]) => {
  const [filter, setFilter] = useState<TastingSheetFilter>({
    ...initialFilter
  })

  const getFilteredSheets = (targetSheets: TastingSheetApi[]) => {
    const { color, country, grape } = filter
    let filteredSheets: TastingSheetApi[] = targetSheets
    if (color !== FILTER_DEFAULT_VALUE) filteredSheets = filteredSheets.filter((sheet) => sheet.color === color)
    if (country !== FILTER_DEFAULT_VALUE)
      filteredSheets = filteredSheets.filter((sheet) => sheet.conclusion.country === country)
    if (grape !== FILTER_DEFAULT_VALUE)
      filteredSheets = filteredSheets.filter((sheet) => sheet.conclusion.grape === grape)
    return filteredSheets
  }

  return {
    filteredTastingSheets: getFilteredSheets(tastingSheets),
    setFilter
  }
}

export default useFilteredTastingSheets
