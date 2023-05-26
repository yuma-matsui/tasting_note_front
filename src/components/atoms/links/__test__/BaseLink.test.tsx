import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'

import { BaseLinkProps } from '../../../../types'
import BaseLink from '../BaseLink'

jest.mock('../../../../hooks/useCheckEditingForm', () => () => ({
  isEditing: true
}))

const mockOnClickOpenModal = jest.fn()
jest.mock('../../../../hooks/useOnClickOpenModal', () => () => ({
  onClickOpenModal: mockOnClickOpenModal
}))

const setUp = ({ logo }: BaseLinkProps) => {
  const utils = render(<BaseLink logo={logo} />, { wrapper: MemoryRouter })

  return {
    ...utils,
    button: screen.getByRole('button')
  }
}

describe('BaseLink', () => {
  let props: BaseLinkProps
  const initialProps: BaseLinkProps = {
    logo: <p>logo</p>
  }

  beforeEach(() => {
    props = { ...initialProps }
  })

  test('logoが表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText('logo')).toBeInTheDocument()
  })

  test('isEditingがtrueの場合buttonが表示される', () => {
    const { button } = setUp(props)
    expect(button).toBeInTheDocument()
  })

  test('isEditingがtrueの場合aタグが表示されない', () => {
    const { queryByRole } = setUp(props)
    expect(queryByRole('link')).not.toBeInTheDocument()
  })

  test('buttonが押された場合onClickOpenModalが呼ばれる', () => {
    const { button } = setUp(props)
    userEvent.click(button)

    expect(mockOnClickOpenModal).toHaveBeenCalled()
  })
})
