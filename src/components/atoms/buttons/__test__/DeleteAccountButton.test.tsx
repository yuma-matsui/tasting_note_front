import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

import DeleteAccountButton from '../DeleteAccountButton'

const mockOnClickDeleteAccount = jest.fn()
jest.mock('../../../../hooks/auth/useOnClickAuth', () => () => ({
  onClickDeleteAccount: mockOnClickDeleteAccount
}))

const mockOnClickOpenModal = jest.fn()
jest.mock('../../../../hooks/useOnClickOpenModal', () => () => ({
  onClickOpenModal: mockOnClickOpenModal
}))

const setUp = () => {
  const utils = render(<DeleteAccountButton />)

  return {
    ...utils,
    button: screen.getByRole('button')
  }
}

describe('DeleteAccountButton', () => {
  it('"アカウント削除"が表示される', () => {
    const { getByText } = setUp()
    expect(getByText('アカウント削除')).toBeInTheDocument()
  })

  it('クリックされた場合、onClickOpenModal関数が呼ばれる', () => {
    const { button } = setUp()
    userEvent.click(button)

    expect(mockOnClickOpenModal).toHaveBeenCalled()
  })

  it('クリックされても、onClickDeleteAccount関数が呼ばれない', () => {
    const { button } = setUp()
    userEvent.click(button)

    expect(mockOnClickDeleteAccount).not.toHaveBeenCalled()
  })
})
