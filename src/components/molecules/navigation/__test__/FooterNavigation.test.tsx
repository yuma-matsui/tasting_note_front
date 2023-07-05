import { render } from '@testing-library/react'

import FooterNavigation from '../FooterNavigation'
import { useCurrentUserContext as mockUseCurrentUserContext } from '../../../../hooks'

jest.mock('../../../../hooks/context/useCurrentUserContext')

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
  let currentUser: boolean
  beforeEach(() => {
    currentUser = false
    ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)
  })

  test('navタグが表示される', () => {
    const { getByRole } = setUp()
    expect(getByRole('navigation')).toBeInTheDocument()
  })

  test('ulタグが表示される', () => {
    const { getByRole } = setUp()
    expect(getByRole('list')).toBeInTheDocument()
  })

  describe('currentUserが存在しない場合', () => {
    test('liタグが2つ表示される', () => {
      const { getAllByRole } = setUp()
      expect(getAllByRole('listitem').length).toEqual(2)
    })
  })

  describe('currenUserが存在する場合', () => {
    beforeEach(() => {
      currentUser = true
      ;(mockUseCurrentUserContext as jest.Mock).mockImplementation(() => currentUser)
    })

    test('liタグが4つ表示される', () => {
      const { getAllByRole } = setUp()
      expect(getAllByRole('listitem').length).toEqual(4)
    })
  })
})
