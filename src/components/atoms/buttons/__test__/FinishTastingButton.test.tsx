import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import FinishTastingButton from '../FinishTastingButton'

const mockOnClickOpenModal = jest.fn()
jest.mock('../../../../hooks/useOnClickOpenModal', () => () => ({
  onClickOpenModal: mockOnClickOpenModal
}))

const setUp = () => {
  const utils = render(<FinishTastingButton />)

  return {
    ...utils,
    button: screen.getByRole('button', { name: '記録せずに終了する' })
  }
}

describe('FinishTastingButton', () => {
  test('buttonが表示される', () => {
    const { button } = setUp()
    expect(button).toBeInTheDocument()
  })

  test('クリックされた場合、onClickOpenModalが呼ばれる', () => {
    const { button } = setUp()
    userEvent.click(button)
    expect(mockOnClickOpenModal).toHaveBeenCalled()
  })
})
