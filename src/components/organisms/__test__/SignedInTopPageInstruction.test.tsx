import { render } from '@testing-library/react'

import SignedInTopPageInstruction from '../SignedInTopPageInstruction'

jest.mock('../../molecules/sections/WelcomePageImagesSection', () => () => <p>MockedWelcomePageImagesSection</p>)

const setUp = () => {
  const utils = render(<SignedInTopPageInstruction />)

  return {
    ...utils
  }
}

describe('SignedInTopPageInstruction', () => {
  test('"テイスティングを記録しよう"が表示される', () => {
    const { getByRole } = setUp()
    expect(getByRole('heading', { name: 'テイスティングを記録しよう' })).toBeInTheDocument()
  })

  test('liタグが3つ表示される', () => {
    const { getAllByRole, getByRole } = setUp()
    expect(getByRole('list')).toBeInTheDocument()
    expect(getAllByRole('listitem').length).toEqual(3)
  })

  test('WelcomePageImagesSectionが表示される', () => {
    const { getByText } = setUp()
    expect(getByText('MockedWelcomePageImagesSection')).toBeInTheDocument()
  })
})
