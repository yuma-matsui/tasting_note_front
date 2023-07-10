import { render } from '@testing-library/react'

import TastingSheetListsWithSideBar from '../TastingSheetListsWithSideBar'
import { ReactNodeChildren, TastingSheetApi } from '../../../types'
import { initialTastingSheet } from '../../../utils'

jest.mock('../TastingSheetSearchSideBar', () => ({ children }: ReactNodeChildren) => (
  <>
    <p>MockedTastingSheetSearchSideBar</p>
    {children}
  </>
))

jest.mock('../TastingSheetLists', () => () => <p>MockedTastingSheetLists</p>)

jest.mock('../../../hooks/useToggleSideBar', () => () => ({
  isOpen: false,
  onClickToggleSideBar: jest.fn()
}))

jest.mock('../../../hooks/tasting_sheet/useFilteredTastingSheets', () => () => ({
  filteredTastingSheets: [],
  setFilter: jest.fn()
}))

const setUp = (tastingSheets: TastingSheetApi[]) => {
  const utils = render(<TastingSheetListsWithSideBar tastingSheets={tastingSheets} />)

  return {
    ...utils
  }
}

describe('TastingSheetListsWithSideBar', () => {
  const tastingSheets = [
    {
      ...initialTastingSheet,
      id: 1,
      createdAt: 'test',
      wine: null
    }
  ]

  test.each([['TastingSheetSearchSideBar'], ['TastingSheetLists']])('%sが表示される', (componentName) => {
    const { getByText } = setUp(tastingSheets)
    expect(getByText(`Mocked${componentName}`)).toBeInTheDocument()
  })
})
