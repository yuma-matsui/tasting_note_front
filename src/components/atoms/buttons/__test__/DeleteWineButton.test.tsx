import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { WineApi } from '../../../../types'
import { wineTestData } from '../../../../utils'
import DeleteWineButton from '../DeleteWineButton'

const mockOnClickDeleteWine = jest.fn()
jest.mock('../../../../hooks/api/useDeleteWine', () => () => ({
  onClickDeleteWine: mockOnClickDeleteWine
}))

const setUp = ({ wine }: { wine: WineApi }) => {
  const utils = render(<DeleteWineButton wine={wine} />)

  return {
    ...utils,
    button: screen.getByRole('button')
  }
}

describe('DeleteWineButton', () => {
  const wine = { ...wineTestData }

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
