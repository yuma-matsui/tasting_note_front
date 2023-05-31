import { render } from '@testing-library/react'

import WelcomePageAboutSection from '../WelcomePageAboutSection'

const setUp = () => {
  const utils = render(<WelcomePageAboutSection />)

  return {
    ...utils
  }
}

describe('WelcomePageAboutSection', () => {
  test('"ABOUT"が表示される', () => {
    const { getByRole } = setUp()
    expect(getByRole('heading', { name: 'About' })).toBeInTheDocument()
  })
})
