import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

import WineDetailsTitle from '../WineDetailsTitle'
import { WineApi } from '../../../../types'
import { wineTestData } from '../../../../utils'

const mockOnClickOpenModal = jest.fn()
jest.mock('../../../../hooks/useOnClickOpenModal', () => () => ({
  onClickOpenModal: mockOnClickOpenModal
}))

const setUp = (wine: WineApi) => {
  const utils = render(<WineDetailsTitle wine={wine} />)

  return {
    ...utils,
    button: screen.getByRole('button', { name: '削除' })
  }
}

describe('WineDetailsTitle', () => {
  const wine = { ...wineTestData }

  test('wineのnameが表示される', () => {
    const { getByText } = setUp(wine)
    expect(getByText(wine.name)).toBeInTheDocument()
  })

  test('削除ボタンが表示される', () => {
    const { button } = setUp(wine)
    expect(button).toBeInTheDocument()
  })

  test('ボタンが押された場合にonClickOpenModalが実行される', () => {
    const { button } = setUp(wine)
    userEvent.click(button)

    expect(mockOnClickOpenModal).toHaveBeenCalled()
  })
})
