import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import DeleteWineButton from '../DeleteWineButton'
import { WineApi } from '../../../../types'

const mockOnClickDeleteWine = jest.fn()

jest.mock('../../../../hooks/api/useDeleteWine', () => () => ({
  onClickDeleteWine: mockOnClickDeleteWine
}))

describe('DeleteWineButton', () => {
  const wine = {} as WineApi

  it('"削除"が表示される', () => {
    render(<DeleteWineButton wine={wine} />)
    expect(screen.getByText('削除')).toBeInTheDocument()
  })

  it('クリックされた場合、onClickDeleteWineが呼ばれる', () => {
    render(<DeleteWineButton wine={wine} />)
    userEvent.click(screen.getByRole('button'))

    expect(mockOnClickDeleteWine).toHaveBeenCalled()
  })
})
