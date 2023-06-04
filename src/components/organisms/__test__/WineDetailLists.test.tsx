import { render, screen } from '@testing-library/react'

import { WineApi } from '../../../types'
import WineDetailLists from '../WineDetailLists'

jest.mock('../../molecules/SheetOrWineDetailsDataList', () => () => <p>MockedSheetOrWineDetailsDataList</p>)

describe('WineDetailLists', () => {
  const wine = {} as WineApi
  test('SheetOrWineDetailsDataListが6つ表示される', () => {
    render(<WineDetailLists wine={wine} />)

    expect(screen.getAllByText('MockedSheetOrWineDetailsDataList').length).toEqual(6)
  })
})
