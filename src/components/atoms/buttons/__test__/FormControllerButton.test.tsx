import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import FormControllerButton from '../FormControllerButton'
import { TastingSheet } from '../../../../types'

const mockClassName = 'mock-class'

jest.mock('../../../../hooks/useGetButtonClassName', () => () => ({
  className: mockClassName
}))

describe('FormControllerButton', () => {
  const value = 'test'
  const tastingSheet = {} as TastingSheet
  const mockOnClick = jest.fn()

  it('valueに与えた文字列が表示される', () => {
    render(<FormControllerButton value={value} disabled={false} onClick={mockOnClick} tastingSheet={tastingSheet} />)
    expect(screen.getByText(value)).toBeInTheDocument()
  })

  describe('disable', () => {
    it('disabledがfalseの時はボタンが有効状態になる', () => {
      render(<FormControllerButton value={value} disabled={false} onClick={mockOnClick} tastingSheet={tastingSheet} />)
      expect(screen.getByRole('button')).toBeEnabled()
    })

    it('disabledがtrueの時はボタンが無効状態になる', () => {
      render(<FormControllerButton value={value} disabled onClick={mockOnClick} tastingSheet={tastingSheet} />)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('useGetButtonClassNameで取得したclassNameをもつ', () => {
      render(<FormControllerButton value={value} disabled onClick={mockOnClick} tastingSheet={tastingSheet} />)
      expect(screen.getByRole('button')).toHaveClass(mockClassName)
    })

    it('クリックされた時にonClickに与えた関数が実行される', () => {
      render(<FormControllerButton value={value} disabled={false} onClick={mockOnClick} tastingSheet={tastingSheet} />)
      userEvent.click(screen.getByRole('button'))

      expect(mockOnClick).toHaveBeenCalled()
    })
  })
})
