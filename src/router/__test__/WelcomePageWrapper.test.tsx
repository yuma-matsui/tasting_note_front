import { render } from '@testing-library/react'

import WelcomePageWrapper from '../WelcomePageWrapper'
import { useCurrentUserContext as mockUseCurrentUserContext } from '../../hooks'

jest.mock('../../hooks/context/useCurrentUserContext')

jest.mock('../../components/pages/WelcomePage', () => () => <p>MockedWelcomePage</p>)
jest.mock('../../components/pages/SignedInWelcomePage', () => () => <p>MockedSignedInWelcomePage</p>)

const setUp = () => {
  const utils = render(<WelcomePageWrapper />)

  return {
    ...utils
  }
}

describe('WelcomePageWrapper', () => {
  let currentUser: boolean

  beforeEach(() => {
    currentUser = true
    ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)
  })

  describe('currentUserが存在する場合', () => {
    test('SignedInWelcomePageが表示される', () => {
      const { getByText } = setUp()
      expect(getByText('MockedSignedInWelcomePage')).toBeInTheDocument()
    })
  })

  describe('currentUserが存在しない場合', () => {
    beforeEach(() => {
      currentUser = false
      ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)
    })

    test('WelcomePageが表示される', () => {
      const { getByText } = setUp()
      expect(getByText('MockedWelcomePage')).toBeInTheDocument()
    })
  })
})
