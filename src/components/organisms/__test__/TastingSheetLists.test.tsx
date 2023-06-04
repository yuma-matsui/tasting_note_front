import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { TastingSheetApi, TastingSheetListsProps } from '../../../types'
import TastingSheetLists from '../TastingSheetLists'
import { useTastingSheetsPagination as mockUseTastingSheetsPagination } from '../../../hooks'

jest.mock('../../molecules/PaginationButtons', () => () => <p>MockedPaginationButtons</p>)
jest.mock('../TastingSheetCards', () => () => <p>MockedTastingSheetCards</p>)

jest.mock('../../../hooks/useTastingSheetsPagination')

const setUp = ({ tastingSheets, onClickToggleSideBar }: TastingSheetListsProps) => {
  const utils = render(<TastingSheetLists tastingSheets={tastingSheets} onClickToggleSideBar={onClickToggleSideBar} />)

  return {
    ...utils,
    button: screen.getByRole('button', { name: '絞り込む' })
  }
}

describe('TastingSheetLists', () => {
  let tastingSheets: TastingSheetApi[]
  const initialSheets = [{ id: 1 }, { id: 2 }] as TastingSheetApi[]

  let props: TastingSheetListsProps

  let usePaginationReturnValue: typeof initialReturnValue
  const initialReturnValue = {
    pageNumber: 1,
    next: jest.fn(),
    back: jest.fn(),
    displayingTastingSheets: [],
    isFirstPage: false,
    isLastPage: false,
    isMoreThanFiveSheets: false
  }

  beforeEach(() => {
    tastingSheets = initialSheets
    props = {
      tastingSheets,
      onClickToggleSideBar: jest.fn()
    }

    usePaginationReturnValue = { ...initialReturnValue }
    ;(mockUseTastingSheetsPagination as jest.Mock).mockImplementation(() => usePaginationReturnValue)
  })

  test('"シート一覧が表示される"', () => {
    const { getByRole } = setUp(props)
    expect(getByRole('heading', { name: 'シート一覧' })).toBeInTheDocument()
  })

  test('絞り込むボタンが表示される', () => {
    const { button } = setUp(props)
    expect(button).toBeInTheDocument()
  })

  test('絞り込むボタンが押された場合、onClickToggleSideBarが実行される', () => {
    const { button } = setUp(props)
    userEvent.click(button)

    expect(props.onClickToggleSideBar).toHaveBeenCalled()
  })

  test('tastingSheetsの要素数が表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText(props.tastingSheets.length)).toBeInTheDocument()
  })

  describe('useTastingSheetsPagination', () => {
    describe('isMoreThanFiveSheets', () => {
      test('falseの場合はPaginationButtonsが表示されない', () => {
        const { queryByText } = setUp(props)
        expect(queryByText('MockedPaginationButtons')).not.toBeInTheDocument()
      })

      test('trueの場合はPaginationButtonsが表示される', () => {
        usePaginationReturnValue.isMoreThanFiveSheets = true
        ;(mockUseTastingSheetsPagination as jest.Mock).mockImplementation(() => usePaginationReturnValue)

        const { getByText } = setUp(props)
        expect(getByText('MockedPaginationButtons')).toBeInTheDocument()
      })
    })

    describe('displayingTastingSheets', () => {
      test('要素数が0の場合は"一致するシートはありません"が表示される', () => {
        const { getByText } = setUp(props)
        expect(getByText('一致するシートはありません')).toBeInTheDocument()
      })

      test('要素数が1以上の場合はTastingSheetCardsが表示される', () => {
        usePaginationReturnValue.displayingTastingSheets = props.tastingSheets as never
        ;(mockUseTastingSheetsPagination as jest.Mock).mockImplementation(() => usePaginationReturnValue)

        const { getByText } = setUp(props)
        expect(getByText('MockedTastingSheetCards')).toBeInTheDocument()
      })
    })
  })
})
