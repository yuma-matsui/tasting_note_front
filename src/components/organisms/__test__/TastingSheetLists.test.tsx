import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { useTastingSheetsPagination as mockUseTastingSheetsPagination } from '../../../hooks'
import { TastingSheetApi, TastingSheetListsProps } from '../../../types'
import { initialTastingSheet } from '../../../utils'
import TastingSheetLists from '../TastingSheetLists'

jest.mock('../../molecules/PaginationButtons', () => () => <p>MockedPaginationButtons</p>)
jest.mock('../TastingSheetCards', () => () => <p>MockedTastingSheetCards</p>)

jest.mock('../../../hooks/useTastingSheetsPagination')

const setUp = ({ onClickToggleSideBar, tastingSheets }: TastingSheetListsProps) => {
  const utils = render(<TastingSheetLists tastingSheets={tastingSheets} onClickToggleSideBar={onClickToggleSideBar} />)

  return {
    ...utils,
    button: screen.getByRole('button', { name: '絞り込む' })
  }
}

describe('TastingSheetLists', () => {
  let tastingSheets: TastingSheetApi[]
  let props: TastingSheetListsProps

  let usePaginationReturnValue: typeof initialReturnValue
  const initialReturnValue = {
    back: jest.fn(),
    displayingTastingSheets: ['test'],
    isFirstPage: false,
    isLastPage: false,
    isMoreThanFiveSheets: false,
    next: jest.fn(),
    pageNumber: 1
  }

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
      }
    ]
    props = {
      onClickToggleSideBar: jest.fn(),
      tastingSheets
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
      describe('falseの場合', () => {
        test('PaginationButtonsが表示されない', () => {
          const { queryByText } = setUp(props)
          expect(queryByText('MockedPaginationButtons')).not.toBeInTheDocument()
        })
      })

      describe('trueの場合', () => {
        beforeEach(() => {
          usePaginationReturnValue.isMoreThanFiveSheets = true
          ;(mockUseTastingSheetsPagination as jest.Mock).mockImplementation(() => usePaginationReturnValue)
        })

        test('PaginationButtonsが表示される', () => {
          const { getByText } = setUp(props)
          expect(getByText('MockedPaginationButtons')).toBeInTheDocument()
        })
      })
    })

    describe('displayingTastingSheets', () => {
      describe('要素数が0の場合', () => {
        beforeEach(() => {
          usePaginationReturnValue.displayingTastingSheets = []
          ;(mockUseTastingSheetsPagination as jest.Mock).mockImplementation(() => usePaginationReturnValue)
        })

        test('"一致するシートはありません"が表示される', () => {
          const { getByText } = setUp(props)
          expect(getByText('一致するシートはありません')).toBeInTheDocument()
        })
      })

      describe('要素数が1以上の場合', () => {
        test('TastingSheetCardsが表示される', () => {
          const { getByText } = setUp(props)
          expect(getByText('MockedTastingSheetCards')).toBeInTheDocument()
        })
      })
    })
  })
})
