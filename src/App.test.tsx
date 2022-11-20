import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const title = screen.getByRole('heading', { name: 'Tasting Note' })
  expect(title).toBeInTheDocument()
})
