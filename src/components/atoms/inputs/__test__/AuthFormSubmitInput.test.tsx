import { render, screen } from '@testing-library/react'

import AuthFormSubmitInput from '../AuthFormSubmitInput'
import { WineColor } from '../../../../types'

const mockClassName = 'mock-class'
jest.mock('../../../../hooks/useGetButtonClassName', () => () => ({
  className: mockClassName
}))

const setUp = ({ color, value }: { color: WineColor; value: string }) => {
  render(<AuthFormSubmitInput value={value} color={color} />)

  return {
    button: screen.getByRole('button')
  }
}

describe('AuthFormSubmitInput', () => {
  const value = 'test'
  const color: WineColor = 'red'

  it('typeがsubmitであること', () => {
    const { button } = setUp({ color, value })
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('useGetButtonClassNameで取得したclassNameをもつ', () => {
    const { button } = setUp({ color, value })
    expect(button).toHaveClass(mockClassName)
  })

  it('valueが表示される', () => {
    const { button } = setUp({ color, value })
    expect(button).toHaveValue(value)
  })
})
