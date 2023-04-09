import { useState } from 'react'

import { TastingSheetApi, TastingSheetFilter } from '../../types'

const DEFAULT_VALUE = '指定なし'

const useFilteredTastingSheets = (tastingSheets: TastingSheetApi[]) => {
  const [filter, setFilter] = useState<TastingSheetFilter>({
    color: DEFAULT_VALUE,
    country: DEFAULT_VALUE,
    grape: DEFAULT_VALUE
  })

  const getFilteredSheets = (targetSheets: TastingSheetApi[]) => {
    const { color, country, grape } = filter
    let filteredSheets: TastingSheetApi[] = targetSheets
    if (color !== DEFAULT_VALUE) filteredSheets = filteredSheets.filter((sheet) => sheet.color === color)
    if (country !== DEFAULT_VALUE)
      filteredSheets = filteredSheets.filter((sheet) => sheet.conclusion.country === country)
    if (grape !== DEFAULT_VALUE) filteredSheets = filteredSheets.filter((sheet) => sheet.conclusion.grape === grape)
    return filteredSheets
  }

  return {
    filteredTastingSheets: getFilteredSheets(tastingSheets),
    setFilter
  }
}

export default useFilteredTastingSheets
