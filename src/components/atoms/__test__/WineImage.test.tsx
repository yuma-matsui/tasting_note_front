import { render, screen } from '@testing-library/react'

import WineImage from '../WineImage'

describe('WineImage', () => {
  const filename = 'test'

  test('alt属性が"wine"のimgタグが表示される', () => {
    render(<WineImage filename={filename} />)
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'wine')
  })

  test('src属性のfilenameが含まれる', () => {
    render(<WineImage filename={filename} />)
    expect(screen.getByRole('img').getAttribute('src')?.includes(filename)).toBeTruthy()
  })
})
