import { render, screen } from '@testing-library/react'
import WelcomePage from '../WelcomePage'

test('renders service title', () => {
  render(<WelcomePage />)
  const title = screen.getByRole('heading', { name: 'Tasting Note' })
  expect(title).toBeInTheDocument()
})
