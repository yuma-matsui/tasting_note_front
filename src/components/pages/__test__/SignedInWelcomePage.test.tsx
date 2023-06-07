import { render } from '@testing-library/react'

import { useFetchTastingSheets as mockUseFetchTastingSheets } from '../../../hooks'
import { ReactNodeChildren } from '../../../types'
import SignedInWelcomePage from '../SignedInWelcomePage'

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

jest.mock('../../atoms/LoadingSpinner', () => () => <p>MockedLoadingSpinner</p>)
jest.mock('../../atoms/links/StartTastingLink', () => () => <p>MockedStartTastingLink</p>)

jest.mock('../../organisms/SignedInTopPageInstruction', () => () => <p>MockedSignedInTopPageInstruction</p>)
jest.mock('../../organisms/TastingSheetListsWithSideBar', () => () => <p>MockedTastingSheetListsWithSideBar</p>)

jest.mock('../../../hooks/api/useFetchTastingSheets')

const setUp = () => {
  const utils = render(<SignedInWelcomePage />)

  return {
    ...utils
  }
}

describe('SignedInWelcomePage', () => {
  let useFetchTastingSheetsReturnValue: typeof initialReturnValue
  const initialReturnValue = {
    tastingSheets: [],
    hasTastingSheets: false,
    fetching: false
  }

  beforeEach(() => {
    useFetchTastingSheetsReturnValue = { ...initialReturnValue }
    ;(mockUseFetchTastingSheets as jest.Mock).mockImplementation(() => useFetchTastingSheetsReturnValue)
  })

  test.each([['HeadMeta'], ['DefaultLayout'], ['StartTastingLink']])('%sが表示される', (componentName) => {
    const { getByText } = setUp()
    expect(getByText(`Mocked${componentName}`)).toBeInTheDocument()
  })

  test.each([['HeadMeta'], ['DefaultLayout'], ['ResetPasswordForm']])(
    'loadingがtrueの場合、LoadingSpinnerが表示されて%sが表示されない',
    (componentName) => {
      useFetchTastingSheetsReturnValue.fetching = true
      ;(mockUseFetchTastingSheets as jest.Mock).mockImplementation(() => useFetchTastingSheetsReturnValue)

      const { getByText, queryByText } = setUp()
      expect(getByText('MockedLoadingSpinner'))
      expect(queryByText(`Mocked${componentName}`)).not.toBeInTheDocument()
    }
  )

  test('fetchingがfalse、hasTastingSheetsがfalseの場合にSignedInTopPageInstructionが表示される', () => {
    const { getByText } = setUp()
    expect(getByText('MockedSignedInTopPageInstruction')).toBeInTheDocument()
  })

  test('fetchingがfalse、hasTastingSheetsがtrueの場合にTastingSheetListsWithSideBarが表示される', () => {
    useFetchTastingSheetsReturnValue.hasTastingSheets = true
    ;(mockUseFetchTastingSheets as jest.Mock).mockImplementation(() => useFetchTastingSheetsReturnValue)

    const { getByText } = setUp()
    expect(getByText('MockedTastingSheetListsWithSideBar')).toBeInTheDocument()
  })
})
