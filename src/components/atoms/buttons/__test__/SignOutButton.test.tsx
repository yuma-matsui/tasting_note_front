import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SignOutButton from '../SignOutButton'

const mockOnClickSignOut = jest.fn()
jest.mock('../../../../hooks/auth/useOnClickAuth', () => () => ({
  onClickSignOut: mockOnClickSignOut
}))

describe('SignOutButton', () => {
  it('"ログアウト"が表示される', () => {
    render(<SignOutButton />)
    expect(screen.getByText('ログアウト')).toBeInTheDocument()
  })

  it('クリックされた場合、onClickSignOutが呼ばれる', () => {
    render(<SignOutButton />)
    userEvent.click(screen.getByRole('button'))

    expect(mockOnClickSignOut).toHaveBeenCalled()
  })
})
