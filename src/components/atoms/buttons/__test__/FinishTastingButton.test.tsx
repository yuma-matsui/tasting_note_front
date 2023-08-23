import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { TastingSheet } from '../../../../types'
import FinishTastingButton from '../FinishTastingButton'

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}))

const setUp = (color: TastingSheet['color']) => {
  const utils = render(<FinishTastingButton color={color} />)

  return {
    ...utils,
    button: screen.getByRole('button', { name: '終了する' })
  }
}

describe('FinishTastingButton', () => {
  test('buttonが表示される', () => {
    const { button } = setUp('red')
    expect(button).toBeInTheDocument()
  })

  test('クリックされた場合にnavigateが実行される', () => {
    const { button } = setUp('red')
    userEvent.click(button)

    expect(mockNavigate).toHaveBeenCalledWith('/')
  })
})
