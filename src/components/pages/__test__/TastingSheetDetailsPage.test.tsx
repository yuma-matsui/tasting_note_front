import { render } from '@testing-library/react'
import { useFetchATastingSheet as mockUseFetchATastingSheet } from '../../../hooks'
import { ReactNodeChildren, TastingSheetApi, WineApi } from '../../../types'
import TastingSheetDetailsPage from '../TastingSheetDetailsPage'

jest.mock('../../../hooks/api/useFetchATastingSheet')

jest.mock('../../atoms/LoadingSpinner', () => () => <p>MockedLoadingSpinner</p>)

jest.mock('../../molecules/DetailsPageBottomButtons', () => () => <p>MockedDetailsPageBottomButtons</p>)

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

jest.mock('../../molecules/titles/TastingSheetDetailsTitle', () => () => <p>MockedTastingSheetDetailsTitle</p>)
jest.mock('../../organisms/TastingSheetDetailsTab', () => () => <p>MockedTastingSheetDetailsTab</p>)
jest.mock('../../organisms/WineDetails', () => () => <p>MockedWineDetails</p>)

const setUp = (tastingSheetId: number) => {
  const utils = render(<TastingSheetDetailsPage tastingSheetId={tastingSheetId} />)

  return {
    ...utils
  }
}

describe('TastingSheetDetailsPage', () => {
  const tastingSheetId = 1

  let useFetchATastingSheetReturnValue: typeof initialReturnValue
  const initialReturnValue = {
    fetching: false,
    tastingSheet: {} as TastingSheetApi
  }

  beforeEach(() => {
    useFetchATastingSheetReturnValue = { ...initialReturnValue }
    ;(mockUseFetchATastingSheet as jest.Mock).mockImplementation(() => useFetchATastingSheetReturnValue)
  })

  test.each([['HeadMeta'], ['DefaultLayout'], ['TastingSheetDetailsTitle'], ['TastingSheetDetailsTab']])(
    '%sが表示される',
    (componentName) => {
      const { getByText } = setUp(tastingSheetId)
      expect(getByText(`Mocked${componentName}`)).toBeInTheDocument()
    }
  )

  test.each([['HeadMeta'], ['DefaultLayout'], ['TastingSheetDetailsTitle'], ['TastingSheetDetailsTab']])(
    'fetchingがtrueの場合、LoadingSpinnerが表示されて%sが表示されない',
    (componentName) => {
      useFetchATastingSheetReturnValue.fetching = true
      ;(mockUseFetchATastingSheet as jest.Mock).mockImplementation(() => useFetchATastingSheetReturnValue)

      const { getByText, queryByText } = setUp(tastingSheetId)
      expect(getByText('MockedLoadingSpinner')).toBeInTheDocument()
      expect(queryByText(`Mocked${componentName}`)).not.toBeInTheDocument()
    }
  )

  describe('WineDetails', () => {
    test('tastingSheetがwineを持たない場合は表示されない', () => {
      const { queryByText } = setUp(tastingSheetId)
      expect(queryByText('MockedWineDetails')).not.toBeInTheDocument()
    })

    test('tastingSheetがwineを持つ場合は表示される', () => {
      useFetchATastingSheetReturnValue.tastingSheet = {
        wine: {} as WineApi
      } as TastingSheetApi
      ;(mockUseFetchATastingSheet as jest.Mock).mockImplementation(() => useFetchATastingSheetReturnValue)

      const { getByText } = setUp(tastingSheetId)
      expect(getByText('MockedWineDetails')).toBeInTheDocument()
    })
  })

  describe('DetailsPageBottomButtons', () => {
    test('tastingSheetがwineを持たない場合は表示される', () => {
      const { getByText } = setUp(tastingSheetId)
      expect(getByText('MockedDetailsPageBottomButtons')).toBeInTheDocument()
    })

    test('tastingSheetがwineを持つ場合は表示されない', () => {
      useFetchATastingSheetReturnValue.tastingSheet = {
        wine: {} as WineApi
      } as TastingSheetApi
      ;(mockUseFetchATastingSheet as jest.Mock).mockImplementation(() => useFetchATastingSheetReturnValue)

      const { queryByText } = setUp(tastingSheetId)
      expect(queryByText('MockedDetailsPageBottomButtons')).not.toBeInTheDocument()
    })
  })
})
