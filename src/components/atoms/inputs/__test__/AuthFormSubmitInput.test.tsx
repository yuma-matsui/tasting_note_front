import { render, screen } from '@testing-library/react'

import AuthFormSubmitInput from '../AuthFormSubmitInput'
import { WineColor } from '../../../../types'

const mockClassName = 'mock-class'
jest.mock('../../../../hooks/useGetButtonClassName', () => () => ({
  className: mockClassName
}))

const value = 'test'
const color: WineColor = 'red'
const setUp = () => {
  render(<AuthFormSubmitInput value={value} color={color} />)
  const button = screen.getByRole('button')

  return {
    button
  }
}

describe('AuthFormSubmitInput', () => {
  it('typeがsubmitであること', () => {
    const { button } = setUp()
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('useGetButtonClassNameで取得したclassNameをもつ', () => {
    const { button } = setUp()
    expect(button).toHaveClass(mockClassName)
  })

  it('valueが表示される', () => {
    const { button } = setUp()
    expect(button).toHaveValue(value)
  })
})
