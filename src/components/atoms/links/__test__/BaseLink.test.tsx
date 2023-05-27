import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'

import { BaseLinkProps } from '../../../../types'
import BaseLink from '../BaseLink'

const mockOnClickOpenModal = jest.fn()
jest.mock('../../../../hooks/useOnClickOpenModal', () => () => ({
  onClickOpenModal: mockOnClickOpenModal
}))

const setUp = ({ logo, isEditing }: BaseLinkProps) => {
  const utils = render(<BaseLink logo={logo} isEditing={isEditing} />, { wrapper: MemoryRouter })

  return {
    ...utils
  }
}

describe('BaseLink', () => {
  let props: BaseLinkProps
  const initialProps: BaseLinkProps = {
    logo: <p>logo</p>,
    isEditing: true
  }

  beforeEach(() => {
    props = { ...initialProps }
  })

  test('logoが表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText('logo')).toBeInTheDocument()
  })

  describe('isEditingがtrueの場合', () => {
    test('buttonが表示される', () => {
      const { getByRole } = setUp(props)
      expect(getByRole('button')).toBeInTheDocument()
    })

    test('aタグが表示されない', () => {
      const { queryByRole } = setUp(props)
      expect(queryByRole('link')).not.toBeInTheDocument()
    })

    test('buttonが押された場合onClickOpenModalが呼ばれる', () => {
      const { getByRole } = setUp(props)
      userEvent.click(getByRole('button'))

      expect(mockOnClickOpenModal).toHaveBeenCalled()
    })
  })

  describe('isEditingがfalseの場合', () => {
    beforeEach(() => {
      props.isEditing = false
    })

    test('aタグが表示される', () => {
      const { getByRole } = setUp(props)
      expect(getByRole('link')).toBeInTheDocument()
    })

    test('buttonタグが表示されない', () => {
      const { queryByRole } = setUp(props)
      expect(queryByRole('button')).not.toBeInTheDocument()
    })
  })
})
