import { render } from '@testing-library/react'

import { TastingSheetApi } from '../../../types'
import { initialTastingSheet } from '../../../utils'
import TastingSheetCards from '../TastingSheetCards'

jest.mock('../../molecules/TastingSheetCard', () => () => <p>MockedTastingSheetCard</p>)

const setUp = (tastingSheets: TastingSheetApi[]) => {
  const utils = render(<TastingSheetCards tastingSheets={tastingSheets} />)

  return {
    ...utils
  }
}

describe('TastingSheetCards', () => {
  let tastingSheets: TastingSheetApi[]

  beforeEach(() => {
    tastingSheets = [
      {
        ...initialTastingSheet,
        id: 1,
        createdAt: 'test',
        wine: null
      },
      {
        ...initialTastingSheet,
        id: 2,
        createdAt: 'test',
        wine: null
      },
      {
        ...initialTastingSheet,
        id: 3,
        createdAt: 'test',
        wine: null
      }
    ]
  })

  test('tastingSheetsの要素数が0の場合liタグが表示されない', () => {
    tastingSheets = []
    const { queryByRole } = setUp(tastingSheets)
    expect(queryByRole('listitem')).not.toBeInTheDocument()
  })

  test('tastingSheetsの要素数の数だけTastingSheetCardが表示される', () => {
    const { getAllByRole, getAllByText } = setUp(tastingSheets)

    expect(getAllByRole('listitem').length).toEqual(tastingSheets.length)
    expect(getAllByText('MockedTastingSheetCard').length).toEqual(tastingSheets.length)
  })
})
