import { render } from '@testing-library/react'

import PrivacyPolicyPage from '../PrivacyPolicyPage'
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
  const utils = render(<PrivacyPolicyPage />)

  return {
    ...utils
  }
}

describe('PrivacyPolicyPage', () => {
  test.each([['HeadMeta'], ['DefaultLayout']])('%sが表示される', (componentName) => {
    const { getByText } = setUp()
    expect(getByText(`Mocked${componentName}`)).toBeInTheDocument()
  })

  test('見出しで"プライバシーポリシー"が表示される', () => {
    const { getByRole } = setUp()
    expect(getByRole('heading', { name: 'プライバシーポリシー' })).toBeInTheDocument()
  })

  test('ポリシーの施工日が2023年6月15日', () => {
    const { getByText } = setUp()
    expect(getByText('本ポリシーは2023年6月15日から施行します。')).toBeInTheDocument()
  })
})
