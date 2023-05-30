import { render } from '@testing-library/react'
import { ReactElement } from 'react'
import { MemoryRouter } from 'react-router-dom'

import DetailsPageBottomButtons from '../DetailsPageBottomButtons'

const setUp = (rightButton: ReactElement) => {
  const utils = render(<DetailsPageBottomButtons rightButton={rightButton} />, { wrapper: MemoryRouter })

  return {
    ...utils
  }
}

describe('DetailsPageBottomButtons', () => {
  const rightButton = <p>RightButton</p>

  test('戻るリンクが表示される', () => {
    const { getByRole } = setUp(rightButton)
    expect(getByRole('link', { name: '戻る' })).toHaveAttribute('href', '/')
  })

  test('rightButtonが表示される', () => {
    const { getByText } = setUp(rightButton)
    expect(getByText('RightButton')).toBeInTheDocument()
  })
})
