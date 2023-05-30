import { render } from '@testing-library/react'

import WelcomePageWithRegistrationSection from '../WelcomePageWithRegistrationSection'

const setUp = () => {
  const utils = render(<WelcomePageWithRegistrationSection />)

  return {
    ...utils
  }
}

describe('WelcomePageWithRegistrationSection', () => {
  test('WITH REGISTRATIONが表示される', () => {
    const { getByText } = setUp()
    expect(getByText('WITH REGISTRATION')).toBeInTheDocument()
  })

  test('liタグが3つ表示される', () => {
    const { getAllByRole } = setUp()
    expect(getAllByRole('listitem').length).toEqual(3)
  })
})
