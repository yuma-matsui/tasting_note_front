import { render, screen } from '@testing-library/react'
import Title from '../Title'

test('renders learn react link', () => {
  render(<Title />)
  const title = screen.getByRole('heading', { name: 'Tasting Note' })
  expect(title).toBeInTheDocument()
})
