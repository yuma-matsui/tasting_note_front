/* eslint-disable @typescript-eslint/no-unsafe-return */

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import GoToAnotherPageButton from '../GoToAnotherPageButton'

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}))

const setUp = ({ text, to }: { text: string; to: string }) => {
  const utils = render(<GoToAnotherPageButton text={text} to={to} />)

  return {
    ...utils,
    button: screen.getByRole('button')
  }
}

describe('GoToAnotherPageButton', () => {
  const params = {
    text: 'test',
    to: '/'
  }

  it('textに与えられた文字列が表示される', () => {
    const { getByText } = setUp(params)
    expect(getByText(params.text)).toBeInTheDocument()
  })

  it('クリックされた場合にtoを引数にもつnavigate関数が実行される', () => {
    const { button } = setUp(params)
    userEvent.click(button)

    expect(mockNavigate).toHaveBeenCalledWith(params.to)
  })
})
