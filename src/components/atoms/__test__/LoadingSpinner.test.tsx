import { render, screen } from '@testing-library/react'
import LoadingSpinner from '../LoadingSpinner'

describe('LoadingSpinner', () => {
  test('Loadingが表示される', () => {
    render(<LoadingSpinner />)
    expect(screen.getByText('Loading')).toBeInTheDocument()
  })
})
