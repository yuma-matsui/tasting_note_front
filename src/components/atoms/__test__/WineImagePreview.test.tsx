import { render, screen } from '@testing-library/react'

import WineImagePreview from '../WineImagePreview'

describe('WineImagePreview', () => {
  const mockURL = 'mockURL'
  const imageFile = {} as File
  const mockCreateObjectURL = jest.fn()
  Object.defineProperty(window, 'URL', {
    configurable: true,
    value: { createObjectURL: mockCreateObjectURL }
  })

  beforeEach(() => {
    mockCreateObjectURL.mockClear()
  })

  test('alt属性に"Wine Preview"を持つimgタグが表示される', () => {
    render(<WineImagePreview imageFile={imageFile} />)
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Wine Preview')
  })

  test('window.URL.createObjectURLが実行される', () => {
    render(<WineImagePreview imageFile={imageFile} />)
    expect(mockCreateObjectURL).toHaveBeenCalledWith(imageFile)
  })

  test('createObjectURLで取得したURLをsrc属性に持つ', () => {
    mockCreateObjectURL.mockReturnValue(mockURL)

    render(<WineImagePreview imageFile={imageFile} />)
    expect(screen.getByRole('img').getAttribute('src')).toEqual(mockURL)
  })
})
