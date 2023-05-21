import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import GoToAnotherPageButton from '../GoToAnotherPageButton'

const mockNavigate = jest.fn()

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}))

describe('GoToAnotherPageButton', () => {
  const text = 'test'
  const to = '/'

  it('textに与えられた文字列が表示される', () => {
    render(<GoToAnotherPageButton text={text} to={to} />)
    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it('クリックされた場合にtoを引数にもつnavigate関数が実行される', () => {
    render(<GoToAnotherPageButton text={text} to={to} />)
    userEvent.click(screen.getByRole('button'))

    expect(mockNavigate).toHaveBeenCalledWith(to)
  })
})
