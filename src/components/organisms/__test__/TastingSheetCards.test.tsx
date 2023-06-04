import { render } from '@testing-library/react'
import { TastingSheetApi } from '../../../types'
import TastingSheetCards from '../TastingSheetCards'

jest.mock('../../molecules/TastingSheetCard', () => () => <p>MockedTastingSheetCard</p>)

const setUp = (tastingSheets: TastingSheetApi[]) => {
  const utils = render(<TastingSheetCards tastingSheets={tastingSheets} />)

  return {
    ...utils
  }
}

describe('TastingSheetCards', () => {
  let tastingSheets = [] as TastingSheetApi[]

  beforeEach(() => {
    tastingSheets = []
  })

  test('tastingSheetsの要素数が0の場合liタグが表示されない', () => {
    const { queryByRole } = setUp(tastingSheets)
    expect(queryByRole('listitem')).not.toBeInTheDocument()
  })

  test('tastingSheetsの要素数の数だけTastingSheetCardが表示される', () => {
    tastingSheets = [{ id: 1 }, { id: 2 }, { id: 3 }] as TastingSheetApi[]

    const { getAllByRole, getAllByText } = setUp(tastingSheets)

    expect(getAllByRole('listitem').length).toEqual(tastingSheets.length)
    expect(getAllByText('MockedTastingSheetCard').length).toEqual(tastingSheets.length)
  })
})
