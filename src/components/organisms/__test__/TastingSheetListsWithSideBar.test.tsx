import { render } from '@testing-library/react'
import { ReactNode } from 'react'

import { TastingSheetApi } from '../../../types'
import TastingSheetListsWithSideBar from '../TastingSheetListsWithSideBar'

jest.mock('../TastingSheetSearchSideBar', () => ({ children }: { children: ReactNode }) => (
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
  setFilter: jest.fn(),
  filteredTastingSheets: []
}))

const setUp = (tastingSheets: TastingSheetApi[]) => {
  const utils = render(<TastingSheetListsWithSideBar tastingSheets={tastingSheets} />)

  return {
    ...utils
  }
}

describe('TastingSheetListsWithSideBar', () => {
  const tastingSheets = [] as TastingSheetApi[]

  test.each([['TastingSheetSearchSideBar'], ['TastingSheetLists']])('%sが表示される', (componentName) => {
    const { getByText } = setUp(tastingSheets)
    expect(getByText(`Mocked${componentName}`)).toBeInTheDocument()
  })
})
