import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SignOutButton from '../SignOutButton'

const mockOnClickSignOut = jest.fn()
jest.mock('../../../../hooks/auth/useOnClickAuth', () => () => ({
  onClickSignOut: mockOnClickSignOut
}))

const setUp = () => {
  const utils = render(<SignOutButton />)

  return {
    ...utils,
    button: screen.getByRole('button')
  }
}

describe('SignOutButton', () => {
  it('"ログアウト"が表示される', () => {
    const { getByText } = setUp()
    expect(getByText('ログアウト')).toBeInTheDocument()
  })

  it('クリックされた場合、onClickSignOutが呼ばれる', () => {
    const { button } = setUp()
    userEvent.click(button)

    expect(mockOnClickSignOut).toHaveBeenCalled()
  })
})
