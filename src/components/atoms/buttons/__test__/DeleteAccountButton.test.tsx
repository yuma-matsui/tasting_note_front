import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import DeleteAccountButton from '../DeleteAccountButton'

const mockOnClickDeleteAccount = jest.fn()
const mockOnClickOpenModal = jest.fn()

jest.mock('../../../../hooks/auth/useOnClickAuth', () => () => ({
  onClickDeleteAccount: mockOnClickDeleteAccount
}))

jest.mock('../../../../hooks/useOnClickOpenModal', () => () => ({
  onClickOpenModal: mockOnClickOpenModal
}))

describe('DeleteAccountButton', () => {
  it('"アカウント削除"が表示される', () => {
    render(<DeleteAccountButton />)
    expect(screen.getByText('アカウント削除')).toBeInTheDocument()
  })

  it('クリックされた場合、onClickOpenModal関数が呼ばれる', () => {
    render(<DeleteAccountButton />)
    userEvent.click(screen.getByRole('button'))

    expect(mockOnClickOpenModal).toHaveBeenCalled()
  })

  it('クリックされても、onClickDeleteAccount関数が呼ばれない', () => {
    render(<DeleteAccountButton />)
    userEvent.click(screen.getByRole('button'))

    expect(mockOnClickDeleteAccount).not.toHaveBeenCalled()
  })
})
