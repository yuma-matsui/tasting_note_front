import { render, screen } from '@testing-library/react'
import ServiceTitle from '../ServiceTitle'

test('renders learn react link', () => {
  render(<ServiceTitle />)
  const title = screen.getByRole('heading', { name: 'Tasting Note' })
  expect(title).toBeInTheDocument()
})
