import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import StartTastingLink from '../StartTastingLink'

const setUp = (text: string) => {
  const utils = render(<StartTastingLink text={text} />, { wrapper: MemoryRouter })

  return {
    ...utils
  }
}

describe('StartTastingLink', () => {
  let text = 'test'

  beforeEach(() => {
    text = 'test'
  })

  test('textが表示される', () => {
    const { getByText } = setUp(text)
    expect(getByText(text)).toBeInTheDocument()
  })

  test('hrefが/tasting_sheets/new', () => {
    const { getByRole } = setUp(text)
    expect(getByRole('link')).toHaveAttribute('href', '/tasting_sheets/new')
  })

  test('typeがbutton', () => {
    const { getByRole } = setUp(text)
    expect(getByRole('link')).toHaveAttribute('type', 'button')
  })

  describe('className', () => {
    test('textが"テイスティングをはじめる"の場合はstickyを持つ', () => {
      text = 'テイスティングをはじめる'
      const { getByRole } = setUp(text)
      expect(getByRole('link')).toHaveClass('sticky')
    })

    test('それ以外の場合はstickyを持たない', () => {
      const { getByRole } = setUp(text)
      expect(getByRole('link')).not.toHaveClass('sticky')
    })
  })
})
