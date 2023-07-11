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
    fetching: false,
    hasTastingSheets: false,
    tastingSheets: []
  }

  beforeEach(() => {
    useFetchTastingSheetsReturnValue = { ...initialReturnValue }
    ;(mockUseFetchTastingSheets as jest.Mock).mockImplementation(() => useFetchTastingSheetsReturnValue)
  })

  test.each([['HeadMeta'], ['DefaultLayout'], ['StartTastingLink']])('%sが表示される', (componentName) => {
    const { getByText } = setUp()
    expect(getByText(`Mocked${componentName}`)).toBeInTheDocument()
  })

  describe('loadingがtrueの場合', () => {
    beforeEach(() => {
      useFetchTastingSheetsReturnValue.fetching = true
      ;(mockUseFetchTastingSheets as jest.Mock).mockImplementation(() => useFetchTastingSheetsReturnValue)
    })

    test.each([['HeadMeta'], ['DefaultLayout'], ['ResetPasswordForm']])(
      'LoadingSpinnerが表示されて%sが表示されない',
      (componentName) => {
        const { getByText, queryByText } = setUp()
        expect(getByText('MockedLoadingSpinner')).toBeInTheDocument()
        expect(queryByText(`Mocked${componentName}`)).not.toBeInTheDocument()
      }
    )
  })

  describe('fetchingがfalse、hasTastingSheetsがfalseの場合', () => {
    test('SignedInTopPageInstructionが表示される', () => {
      const { getByText } = setUp()
      expect(getByText('MockedSignedInTopPageInstruction')).toBeInTheDocument()
    })
  })

  describe('fetchingがfalse、hasTastingSheetsがtrueの場合', () => {
    beforeEach(() => {
      useFetchTastingSheetsReturnValue.hasTastingSheets = true
      ;(mockUseFetchTastingSheets as jest.Mock).mockImplementation(() => useFetchTastingSheetsReturnValue)
    })

    test('TastingSheetListsWithSideBarが表示される', () => {
      const { getByText } = setUp()
      expect(getByText('MockedTastingSheetListsWithSideBar')).toBeInTheDocument()
    })
  })
})
