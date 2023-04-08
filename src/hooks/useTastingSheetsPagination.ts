import { useState } from 'react'

import { TastingSheetApi } from '../types'

const DISPLAYING_SHEETS_NUMBER = 5

const useTastingSheetsPagination = (tastingSheets: TastingSheetApi[]) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0)
  const pageNumber = currentPageIndex + 1

  const next = () => {
    setCurrentPageIndex((index) => {
      if (index >= tastingSheets.length - 1) return index
      return index + 1
    })
  }

  const back = () => {
    setCurrentPageIndex((index) => {
      if (index <= 0) return index
      return index - 1
    })
  }

  const displayingTastingSheets = tastingSheets.slice(
    currentPageIndex * DISPLAYING_SHEETS_NUMBER,
    DISPLAYING_SHEETS_NUMBER * pageNumber
  )

  return {
    pageNumber,
    isFirstPage: pageNumber === 1,
    isLastPage: pageNumber === Math.ceil(tastingSheets.length / DISPLAYING_SHEETS_NUMBER),
    next,
    back,
    displayingTastingSheets,
    isMoreThanFiveSheets: tastingSheets.length > DISPLAYING_SHEETS_NUMBER
  }
}

export default useTastingSheetsPagination
