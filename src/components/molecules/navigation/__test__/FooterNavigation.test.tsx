import { render } from '@testing-library/react'

import FooterNavigation from '../FooterNavigation'

let mockCurrentUser = false
jest.mock('../../../../hooks/context/useAuthContext', () => () => ({
  currentUser: mockCurrentUser
}))

jest.mock('../../../../hooks/useCheckEditingForm', () => () => ({
  isEditing: false
}))

jest.mock('../../../atoms/')

const setUp = () => {
  const utils = render(<FooterNavigation />)

  return {
    ...utils
  }
}

describe('FooterNavigation', () => {
  beforeEach(() => {
    mockCurrentUser = false
  })

  test('navタグが表示される', () => {
    const { getByRole } = setUp()
    expect(getByRole('navigation')).toBeInTheDocument()
  })

  test('ulタグが表示される', () => {
    const { getByRole } = setUp()
    expect(getByRole('list')).toBeInTheDocument()
  })

  describe('currentUser', () => {
    test('存在しない場合', () => {
      const { getAllByRole } = setUp()
      expect(getAllByRole('listitem').length).toEqual(2)
    })

    test('存在する場合', () => {
      mockCurrentUser = true
      const { getAllByRole } = setUp()
      expect(getAllByRole('listitem').length).toEqual(4)
    })
  })
})
