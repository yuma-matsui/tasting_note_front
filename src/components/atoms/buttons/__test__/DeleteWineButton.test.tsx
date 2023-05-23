import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import DeleteWineButton from '../DeleteWineButton'
import { WineApi } from '../../../../types'

const mockOnClickDeleteWine = jest.fn()
jest.mock('../../../../hooks/api/useDeleteWine', () => () => ({
  onClickDeleteWine: mockOnClickDeleteWine
}))

const setUp = ({ wine }: { wine: WineApi }) => {
  const utils = render(<DeleteWineButton wine={wine} />)
  const button = screen.getByRole('button')

  return {
    ...utils,
    button
  }
}

describe('DeleteWineButton', () => {
  const wine = {} as WineApi

  it('"削除"が表示される', () => {
    const { getByText } = setUp({ wine })
    expect(getByText('削除')).toBeInTheDocument()
  })

  it('クリックされた場合、onClickDeleteWineが呼ばれる', () => {
    const { button } = setUp({ wine })
    userEvent.click(button)

    expect(mockOnClickDeleteWine).toHaveBeenCalled()
  })
})
