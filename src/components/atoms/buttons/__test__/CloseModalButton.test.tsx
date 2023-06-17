import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

import CloseModalButton from '../CloseModalButton'

const setUp = ({ onClick }: { onClick: () => void }) => {
  const utils = render(<CloseModalButton onClick={onClick} />)

  return {
    ...utils,
    button: screen.getByRole('button')
  }
}

describe('CloseModalButton', () => {
  const onClickMock = jest.fn() as () => void

  it('クリックされた場合、引数に与えた関数が実行される', () => {
    const { button } = setUp({ onClick: onClickMock })
    userEvent.click(button)
    expect(onClickMock).toHaveBeenCalled()
  })

  it('"いいえ"が表示される', () => {
    const { getByText } = setUp({ onClick: onClickMock })
    expect(getByText('いいえ')).toBeInTheDocument()
  })
})
