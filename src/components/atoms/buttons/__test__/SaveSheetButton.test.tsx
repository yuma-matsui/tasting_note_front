import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { TastingSheet } from '../../../../types'
import SaveSheetButton from '../SaveSheetButton'

const mockOnClickOpenModal = jest.fn()
jest.mock('../../../../hooks/useOnClickOpenModal', () => () => ({
  onClickOpenModal: mockOnClickOpenModal
}))

const mockClassName = 'mock-class'
jest.mock('../../../../hooks/useGetButtonClassName', () => () => ({
  className: mockClassName
}))

const setUp = (tastingSheet: TastingSheet) => {
  render(<SaveSheetButton tastingSheet={tastingSheet} />)

  return {
    button: screen.getByRole('button', { name: '記録する' })
  }
}

describe('SaveSheetButton', () => {
  const tastingSheet = {} as TastingSheet

  test('buttonが表示される', () => {
    const { button } = setUp(tastingSheet)
    expect(button).toBeInTheDocument()
  })

  test('useGetButtonClassNameで取得したclassNameを持つ', () => {
    const { button } = setUp(tastingSheet)
    expect(button).toHaveClass(mockClassName)
  })

  test('クリックされるとonClickOpenModalが呼ばれる', () => {
    const { button } = setUp(tastingSheet)
    userEvent.click(button)
    expect(mockOnClickOpenModal).toHaveBeenCalled()
  })
})
