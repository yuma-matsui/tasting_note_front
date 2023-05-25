import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import DeleteTastingSheetButton from '../DeleteTastingSheetButton'

const mockOnClickDelete = jest.fn()
jest.mock('../../../../hooks/api/useDeleteTastingSheet', () => () => ({
  onClickDelete: mockOnClickDelete
}))

const setUp = () => {
  const utils = render(<DeleteTastingSheetButton id={1} />)

  return {
    ...utils,
    button: screen.getByRole('button')
  }
}

describe('DeleteTastingSheetButton', () => {
  it('"削除"が表示される', () => {
    const { getByText } = setUp()
    expect(getByText('削除')).toBeInTheDocument()
  })

  it('クリックされた場合、onClickDelete関数が呼ばれる', () => {
    const { button } = setUp()
    userEvent.click(button)

    expect(mockOnClickDelete).toHaveBeenCalled()
  })
})
