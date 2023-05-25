import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import FormControllerButton from '../FormControllerButton'
import { FormControllerButtonProps, TastingSheet } from '../../../../types'

const mockClassName = 'mock-class'
jest.mock('../../../../hooks/useGetButtonClassName', () => () => ({
  className: mockClassName
}))

const setUp = ({ value, disabled, onClick, tastingSheet }: FormControllerButtonProps) => {
  const utils = render(
    <FormControllerButton value={value} disabled={disabled} onClick={onClick} tastingSheet={tastingSheet} />
  )

  return {
    ...utils,
    button: screen.getByRole('button')
  }
}

describe('FormControllerButton', () => {
  let props: FormControllerButtonProps
  const initialProps = {
    value: 'test',
    disabled: false,
    tastingSheet: {} as TastingSheet,
    onClick: jest.fn()
  }

  beforeEach(() => {
    props = { ...initialProps }
  })

  it('valueに与えた文字列が表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText(props.value)).toBeInTheDocument()
  })

  describe('disable', () => {
    it('disabledがfalseの時はボタンが有効状態になる', () => {
      const { button } = setUp(props)
      expect(button).toBeEnabled()
    })

    it('disabledがtrueの時はボタンが無効状態になる', () => {
      props.disabled = true
      const { button } = setUp(props)
      expect(button).toBeDisabled()
    })

    it('useGetButtonClassNameで取得したclassNameをもつ', () => {
      const { button } = setUp(props)
      expect(button).toHaveClass(mockClassName)
    })

    it('クリックされた時にonClickに与えた関数が実行される', () => {
      const { button } = setUp(props)
      userEvent.click(button)

      expect(props.onClick).toHaveBeenCalled()
    })
  })
})
