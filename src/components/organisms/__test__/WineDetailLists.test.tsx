import { render, screen } from '@testing-library/react'

import WineDetailLists from '../WineDetailLists'
import { wineTestData } from '../../../utils'

jest.mock('../../molecules/SheetOrWineDetailsDataList', () => () => <p>MockedSheetOrWineDetailsDataList</p>)

describe('WineDetailLists', () => {
  const wine = { ...wineTestData }
  test('SheetOrWineDetailsDataListが6つ表示される', () => {
    render(<WineDetailLists wine={wine} />)

    expect(screen.getAllByText('MockedSheetOrWineDetailsDataList').length).toEqual(6)
  })
})
