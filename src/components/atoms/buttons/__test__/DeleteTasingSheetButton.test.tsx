import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import DeleteTastingSheetButton from '../DeleteTastingSheetButton'

const mockOnClickDelete = jest.fn()

jest.mock('../../../../hooks/api/useDeleteTastingSheet', () => () => ({
  onClickDelete: mockOnClickDelete
}))

describe('DeleteTastingSheetButton', () => {
  it('"削除"が表示される', () => {
    render(<DeleteTastingSheetButton id={1} />)
    expect(screen.getByText('削除')).toBeInTheDocument()
  })

  it('クリックされた場合、onClickDelete関数が呼ばれる', () => {
    render(<DeleteTastingSheetButton id={1} />)
    userEvent.click(screen.getByRole('button'))

    expect(mockOnClickDelete).toHaveBeenCalled()
  })
})
