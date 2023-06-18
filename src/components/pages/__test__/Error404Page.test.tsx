import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import Error404Page from '../Error404Page'
import { ReactNodeChildren } from '../../../types'

jest.mock('../../molecules/HeadMeta', () => ({ children }: ReactNodeChildren) => (
  <>
    <p>MockedHeadMeta</p>
    {children}
  </>
))

jest.mock('../../templates/DefaultLayout', () => ({ children }: ReactNodeChildren) => (
  <>
    <p>MockedDefaultLayout</p>
    {children}
  </>
))

const setUp = () => {
  const utils = render(<Error404Page />, { wrapper: MemoryRouter })

  return {
    ...utils
  }
}

describe('Error404Page', () => {
  test.each([['HeadMeta'], ['DefaultLayout']])('%sが表示される', (componentName) => {
    const { getByText } = setUp()
    expect(getByText(`Mocked${componentName}`)).toBeInTheDocument()
  })

  test('トップページへのリンクが表示される', () => {
    const { getByRole } = setUp()
    const link = getByRole('link', { name: 'Tasting Noteトップページへ' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
  })
})
