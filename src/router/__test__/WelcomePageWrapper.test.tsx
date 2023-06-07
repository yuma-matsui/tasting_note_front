import { render } from '@testing-library/react'

import WelcomePageWrapper from '../WelcomePageWrapper'
import { useAuthContext as mockUseAuthContext } from '../../hooks'

jest.mock('../../hooks/context/useAuthContext')

jest.mock('../../components/pages/WelcomePage', () => () => <p>MockedWelcomePage</p>)
jest.mock('../../components/pages/SignedInWelcomePage', () => () => <p>MockedSignedInWelcomePage</p>)

const setUp = () => {
  const utils = render(<WelcomePageWrapper />)

  return {
    ...utils
  }
}

describe('WelcomePageWrapper', () => {
  beforeEach(() => {
    ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
      currentUser: true
    }))
  })

  test('currentUserが存在する場合、SignedInWelcomePageが表示される', () => {
    const { getByText } = setUp()
    expect(getByText('MockedSignedInWelcomePage')).toBeInTheDocument()
  })

  test('currentUserが存在しない場合、WelcomePageが表示される', () => {
    ;(mockUseAuthContext as jest.Mock).mockImplementation(() => ({
      currentUser: false
    }))

    const { getByText } = setUp()
    expect(getByText('MockedWelcomePage')).toBeInTheDocument()
  })
})
