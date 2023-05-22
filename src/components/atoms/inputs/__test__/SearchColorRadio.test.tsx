import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SearchColorRadio from '../SearchColorRadio'

const mockLabel = 'mock label'
jest.mock('../../../../hooks/useGetSearchRadioLabel', () => () => mockLabel)

const color = '指定なし'
const mockOnChange = jest.fn()

const setUp = ({ checked }: { checked: boolean }) => {
  const utils = render(<SearchColorRadio color={color} checked={checked} onChange={mockOnChange} />)

  return {
    ...utils,
    radio: screen.getByRole('radio')
  }
}

describe('SearchColorRadio', () => {
  it('useGetSearchRadioLabelで受けとった値が表示される', () => {
    const { getByText } = setUp({ checked: false })
    expect(getByText(mockLabel)).toBeInTheDocument()
  })

  it('クリックされた時にonChange関数が呼ばれる', () => {
    const { radio } = setUp({ checked: false })
    userEvent.click(radio)
    expect(mockOnChange).toHaveBeenCalled()
  })

  describe('checked', () => {
    it('falseの場合にcheckedがfalseになる', () => {
      const { radio } = setUp({ checked: false })
      expect(radio).not.toBeChecked()
    })

    it('trueの場合にcheckedがtrueになる', () => {
      const { radio } = setUp({ checked: true })
      expect(radio).toBeChecked()
    })
  })
})
