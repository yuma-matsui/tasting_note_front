import { render } from '@testing-library/react'

import EditWinePage from '../EditWinePage'
import { ReactNodeChildren, WineApi } from '../../../types'
import { wineTestData } from '../../../utils'

jest.mock('../../molecules/HeadMeta', () => ({ children }: ReactNodeChildren) => (
  <>
    <p>MockedHeadMeta</p>
    {children}
  </>
))

jest.mock('../../molecules/forms/WineForm', () => () => <p>MockedWineForm</p>)

jest.mock('../../templates/DefaultLayout', () => ({ children }: ReactNodeChildren) => (
  <>
    <p>MockedDefaultLayout</p>
    {children}
  </>
))

const setUp = (wine: WineApi) => {
  const utils = render(<EditWinePage wine={wine} />)

  return {
    ...utils
  }
}

describe('EditWinePage', () => {
  const wine = { ...wineTestData }

  test.each([['HeadMeta'], ['DefaultLayout'], ['WineForm']])('%sが表示される', (componentName) => {
    const { getByText } = setUp(wine)
    expect(getByText(`Mocked${componentName}`)).toBeInTheDocument()
  })
})
