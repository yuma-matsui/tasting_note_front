import { render } from '@testing-library/react'

import WelcomePageImagesSection from '../WelcomePageImagesSection'

const setUp = () => {
  const utils = render(<WelcomePageImagesSection />)

  return {
    ...utils
  }
}

describe('WelcomePageImagesSection', () => {
  test.each([['外観'], ['香り'], ['味わい'], ['まとめ']])('%sが表示される', (text) => {
    const { getByText } = setUp()
    expect(getByText(text)).toBeInTheDocument()
  })

  test('imgタグが4つ表示される', () => {
    const { getAllByRole } = setUp()
    expect(getAllByRole('img').length).toEqual(4)
  })
})
