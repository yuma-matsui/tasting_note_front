import { render } from '@testing-library/react'
import { ReactNode } from 'react'

import DefaultLayout from '../DefaultLayout'

jest.mock('../../organisms/Header', () => () => <p>MockedHeader</p>)
jest.mock('../../organisms/Footer', () => () => <p>MockedFooter</p>)

const setUp = (children: ReactNode) => {
  const utils = render(<DefaultLayout>{children}</DefaultLayout>)

  return {
    ...utils
  }
}

describe('DefaultLayout', () => {
  const children = <p>MockedChildren</p>

  test.each([['Children'], ['Header'], ['Footer']])('%sが表示される', (element) => {
    const { getByText } = setUp(children)
    expect(getByText(`Mocked${element}`)).toBeInTheDocument()
  })
})
