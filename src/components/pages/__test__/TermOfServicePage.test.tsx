import { render } from '@testing-library/react'

import { ReactNodeChildren } from '../../../types'
import TermOfServicePage from '../TermOfServicePage'

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
  const utils = render(<TermOfServicePage />)

  return {
    ...utils
  }
}

describe('TermOfServicePage', () => {
  test.each([['HeadMeta'], ['DefaultLayout']])('%sが表示される', (componentName) => {
    const { getByText } = setUp()
    expect(getByText(`Mocked${componentName}`)).toBeInTheDocument()
  })

  test('見出しで"利用規約"が表示される', () => {
    const { getByRole } = setUp()
    expect(getByRole('heading', { name: '利用規約' })).toBeInTheDocument()
  })

  test('制定日が2023年6月15日', () => {
    const { getByText } = setUp()
    expect(getByText('2023年 6月15日 制定')).toBeInTheDocument()
  })
})
