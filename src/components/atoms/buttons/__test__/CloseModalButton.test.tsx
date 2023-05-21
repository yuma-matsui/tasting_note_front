import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import CloseModalButton from '../CloseModalButton'

describe('CloseModalButton', () => {
  it('クリックされた場合、引数に与えた関数が実行される', () => {
    const onClickMock = jest.fn() as () => void

    render(<CloseModalButton onClick={onClickMock} />)
    userEvent.click(screen.getByRole('button'))

    expect(onClickMock).toHaveBeenCalled()
  })

  it('"いいえ"が表示される', () => {
    render(<CloseModalButton onClick={() => {}} />)
    expect(screen.getByText('いいえ')).toBeInTheDocument()
  })
})
