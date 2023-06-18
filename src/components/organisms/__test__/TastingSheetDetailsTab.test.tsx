import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'

import {
  useDetailsTabItems as mockUseDetailsTabItems,
  useGetTabButtonClassName as mockUseGetTabButtonClassName,
  useTastingSheetLabels as mockUseTastingSheetLabels
} from '../../../hooks'
import { ReactNodeChildren, TastingSheet, TastingSheetLabelsTuple } from '../../../types'
import TastingSheetDetailsTab from '../TastingSheetDetailsTab'
import TastingSheetFormItem from '../../../types/tasting_sheet/tastingSheetFormItem'
import { initialTastingSheet } from '../../../utils'

jest.mock('../../templates/TastingSheetFormWrapper', () => ({ children }: ReactNodeChildren) => (
  <>
    <h2>MockedTastingSheetFormWrapper</h2>
    {children}
  </>
))

jest.mock('../../molecules/SheetOrWineDetailsDataList', () => () => <p>MockedSheetOrDetailsDataList</p>)

jest.mock('../../../hooks/tasting_sheet/useDetailsTabItems')
jest.mock('../../../hooks/useGetTabButtonClassName')
jest.mock('../../../hooks/tasting_sheet/useTastingSheetLabels')

const mockedTitle = 'mockedTitle'
jest.mock('../../../utils/formTitleFormat', () => () => mockedTitle)

const setUp = (tastingSheet: TastingSheet) => {
  const utils = render(<TastingSheetDetailsTab tastingSheet={tastingSheet} />)

  return {
    ...utils
  }
}

describe('TastingSheetDetailsTab', () => {
  const tastingSheet = { ...initialTastingSheet }
  const mockedLabelItems = [{ heading: 'test' }, { heading: 'test2' }] as TastingSheetFormItem[]
  const mockedLabelOptions = [{ heading: 'test3' }, { heading: 'test4' }] as TastingSheetFormItem[]
  const mockClassName = 'mock-class'

  const labels = [
    {
      type: 'appearance',
      items: mockedLabelItems,
      options: []
    },
    {
      type: 'flavor',
      items: mockedLabelItems,
      options: []
    },
    {
      type: 'taste',
      items: mockedLabelItems,
      options: []
    },
    {
      type: 'conclusion',
      items: mockedLabelItems,
      options: mockedLabelOptions
    }
  ] as TastingSheetLabelsTuple

  let useDetailsTabItemsReturnValue: typeof initialTabItemsReturnValue
  const initialTabItemsReturnValue = {
    isShow: jest.fn(),
    onClickTabChange: jest.fn(),
    getFormResult: jest.fn()
  }

  let useGetTabButtonClassNameReturnValue: typeof initialTabButtonReturnValue
  const initialTabButtonReturnValue = {
    getTabButtonClassName: jest.fn()
  }

  beforeEach(() => {
    useDetailsTabItemsReturnValue = { ...initialTabItemsReturnValue }
    useGetTabButtonClassNameReturnValue = { ...initialTabButtonReturnValue }
    ;(mockUseTastingSheetLabels as jest.Mock).mockImplementation(() => labels)
    ;(mockUseDetailsTabItems as jest.Mock).mockImplementation(() => useDetailsTabItemsReturnValue)
    ;(mockUseGetTabButtonClassName as jest.Mock).mockImplementation(() => useGetTabButtonClassNameReturnValue)
  })

  test('TastingSheetFormWrapperが表示される', () => {
    const { getByText } = setUp(tastingSheet)
    expect(getByText('MockedTastingSheetFormWrapper'))
  })

  test('buttonタグがlabelsの要素数表示される', () => {
    const { getAllByRole } = setUp(tastingSheet)
    expect(getAllByRole('button').length).toEqual(labels.length)
  })

  test('ボタンがクリックされた場合、onClickTabChangeが呼ばれる', () => {
    const { getAllByRole } = setUp(tastingSheet)
    getAllByRole('button').map((button) => userEvent.click(button))

    expect(useDetailsTabItemsReturnValue.onClickTabChange).toHaveBeenCalledTimes(labels.length)
  })

  test('buttonタグはgetTabButtonClassNameで取得したclassNameをもつ', () => {
    useGetTabButtonClassNameReturnValue.getTabButtonClassName = jest.fn(() => mockClassName)
    ;(mockUseGetTabButtonClassName as jest.Mock).mockImplementation(() => useGetTabButtonClassNameReturnValue)

    const { getAllByRole } = setUp(tastingSheet)
    const buttons = getAllByRole('button')
    buttons.map((button) => expect(button).toHaveClass(mockClassName))
  })

  test('formTitleFormatが表示される', () => {
    const { getAllByText } = setUp(tastingSheet)
    expect(getAllByText(mockedTitle).length).toEqual(labels.length)
  })

  describe('SheetOrWineDetailsDataListの表示', () => {
    test.each([
      ['appearance', labels[0].items.length],
      ['flavor', labels[1].items.length],
      ['taste', labels[2].items.length],
      ['conclusion', labels[3].items.length + labels[3].options.length]
    ])('typeが%sの場合は%d個表示される', (type, result) => {
      const mockedIsShow = jest.fn((formType: string) => formType === type)
      useDetailsTabItemsReturnValue.isShow = mockedIsShow
      ;(mockUseDetailsTabItems as jest.Mock).mockImplementation(() => useDetailsTabItemsReturnValue)

      const { getAllByText } = setUp(tastingSheet)
      expect(getAllByText('MockedSheetOrDetailsDataList').length).toEqual(result)
    })
  })
})
