import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'

import { BaseLinkProps } from '../../../../types'
import BaseLink from '../BaseLink'

const mockOnClickOpenModal = jest.fn()
jest.mock('../../../../hooks/useOnClickOpenModal', () => () => ({
  onClickOpenModal: mockOnClickOpenModal
}))

const setUp = ({ isEditing, logo }: BaseLinkProps) => {
  const router = createMemoryRouter(
    [
      {
        element: <BaseLink logo={logo} isEditing={isEditing} />,
        path: '/test'
      },
      {
        element: <p>test</p>,
        path: '/'
      }
    ],
    { initialEntries: ['/test'] }
  )
  const utils = render(<RouterProvider router={router} />)

  return {
    router,
    ...utils
  }
}

describe('BaseLink', () => {
  let props: BaseLinkProps
  const initialProps: BaseLinkProps = {
    isEditing: true,
    logo: <p>logo</p>
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

    test('クリックされた場合、トップページに遷移する', () => {
      const { getByRole, router } = setUp(props)
      userEvent.click(getByRole('link'))

      expect(router.state.location.pathname).toEqual('/')
    })
  })
})
