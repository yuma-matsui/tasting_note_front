import { render } from '@testing-library/react'

import { useFetchATastingSheet as mockUseFetchATastingSheet } from '../../../hooks'
import { ReactNodeChildren, TastingSheetApi } from '../../../types'
import TastingSheetDetailsPage from '../TastingSheetDetailsPage'
import { initialTastingSheet, wineTestData } from '../../../utils'

jest.mock('../../../hooks/api/useFetchATastingSheet')

jest.mock('../../atoms/LoadingSpinner', () => () => <p>MockedLoadingSpinner</p>)
jest.mock('../../molecules/DetailsPageBottomButtons', () => () => <p>MockedDetailsPageBottomButtons</p>)
jest.mock('../../molecules/titles/TastingSheetDetailsTitle', () => () => <p>MockedTastingSheetDetailsTitle</p>)
jest.mock('../../organisms/TastingSheetDetailsTab', () => () => <p>MockedTastingSheetDetailsTab</p>)
jest.mock('../../organisms/WineDetails', () => () => <p>MockedWineDetails</p>)

jest.mock('../../molecules/HeadMeta', () => ({ children }: ReactNodeChildren) => (
  <>
    <p>MockedHeadMeta</p>
    {children}
  </>
))

jest.mock('../../templates/DefaultLayout', () => ({ children }: ReactNodeChildren) => (
  <>
    <p>MockedDefaultLayout</p>
    {children}
  </>
))

const setUp = (tastingSheetId: number) => {
  const utils = render(<TastingSheetDetailsPage tastingSheetId={tastingSheetId} />)

  return {
    ...utils
  }
}

type UseFetchATastingSheetReturnValue = {
  fetching: boolean
  tastingSheet: TastingSheetApi
}

describe('TastingSheetDetailsPage', () => {
  const tastingSheetId = 1
  let useFetchATastingSheetReturnValue: UseFetchATastingSheetReturnValue
  let tastingSheet: TastingSheetApi

  beforeEach(() => {
    tastingSheet = {
      ...initialTastingSheet,
      id: 1,
      createdAt: 'test',
      wine: null
    }
    useFetchATastingSheetReturnValue = {
      fetching: false,
      tastingSheet
    }
    ;(mockUseFetchATastingSheet as jest.Mock).mockImplementation(() => useFetchATastingSheetReturnValue)
  })

  test.each([['HeadMeta'], ['DefaultLayout'], ['TastingSheetDetailsTitle'], ['TastingSheetDetailsTab']])(
    '%sが表示される',
    (componentName) => {
      const { getByText } = setUp(tastingSheetId)
      expect(getByText(`Mocked${componentName}`)).toBeInTheDocument()
    }
  )

  describe('fetchingがtrueの場合', () => {
    beforeEach(() => {
      useFetchATastingSheetReturnValue.fetching = true
      ;(mockUseFetchATastingSheet as jest.Mock).mockImplementation(() => useFetchATastingSheetReturnValue)
    })

    test.each([['HeadMeta'], ['DefaultLayout'], ['TastingSheetDetailsTitle'], ['TastingSheetDetailsTab']])(
      'LoadingSpinnerが表示されて%sが表示されない',
      (componentName) => {
        const { getByText, queryByText } = setUp(tastingSheetId)
        expect(getByText('MockedLoadingSpinner')).toBeInTheDocument()
        expect(queryByText(`Mocked${componentName}`)).not.toBeInTheDocument()
      }
    )
  })

  describe('WineDetails', () => {
    describe('tastingSheetがwineを持たない場合', () => {
      test('表示されない', () => {
        const { queryByText } = setUp(tastingSheetId)
        expect(queryByText('MockedWineDetails')).not.toBeInTheDocument()
      })
    })

    describe('tastingSheetがwineを持つ場合', () => {
      beforeEach(() => {
        useFetchATastingSheetReturnValue.tastingSheet.wine = { ...wineTestData }
        ;(mockUseFetchATastingSheet as jest.Mock).mockImplementation(() => useFetchATastingSheetReturnValue)
      })

      test('表示される', () => {
        const { getByText } = setUp(tastingSheetId)
        expect(getByText('MockedWineDetails')).toBeInTheDocument()
      })
    })
  })

  describe('DetailsPageBottomButtons', () => {
    describe('tastingSheetがwineを持たない場合', () => {
      test('表示される', () => {
        const { getByText } = setUp(tastingSheetId)
        expect(getByText('MockedDetailsPageBottomButtons')).toBeInTheDocument()
      })
    })

    describe('tastingSheetがwineを持つ場合', () => {
      beforeEach(() => {
        useFetchATastingSheetReturnValue.tastingSheet.wine = { ...wineTestData }
        ;(mockUseFetchATastingSheet as jest.Mock).mockImplementation(() => useFetchATastingSheetReturnValue)
      })

      test('表示されない', () => {
        const { queryByText } = setUp(tastingSheetId)
        expect(queryByText('MockedDetailsPageBottomButtons')).not.toBeInTheDocument()
      })
    })
  })
})
