import { render } from '@testing-library/react'

import { ReactNodeChildren } from '../../../types'
import NewWinePage from '../NewWinePage'

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

jest.mock('../../molecules/forms/WineForm', () => () => <p>MockedWineForm</p>)

const setUp = () => {
  const utils = render(<NewWinePage />)

  return {
    ...utils
  }
}

describe('NewWinePage', () => {
  test.each([['HeadMeta'], ['DefaultLayout'], ['WineForm']])('%sが表示される', (componentName) => {
    const { getByText } = setUp()
    expect(getByText(`Mocked${componentName}`)).toBeInTheDocument()
  })
})
