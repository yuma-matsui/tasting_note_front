import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'

import FooterLinkWrapper from '../FooterLinkWrapper'
import { FooterLinkWrapperProps } from '../../../../types'

const mockOnClickOpenModal = jest.fn()
jest.mock('../../../../hooks/useOnClickOpenModal', () => () => ({
  onClickOpenModal: mockOnClickOpenModal
}))

const setUp = ({ defaultLink, isEditing, linkOnModal, text }: FooterLinkWrapperProps) => {
  const utils = render(
    <FooterLinkWrapper text={text} defaultLink={defaultLink} linkOnModal={linkOnModal} isEditing={isEditing} />
  )

  return {
    ...utils
  }
}

describe('FooterLinkWrapper', () => {
  let props: FooterLinkWrapperProps
  const initialProps: FooterLinkWrapperProps = {
    defaultLink: <a href="/">defaultLink</a>,
    isEditing: true,
    linkOnModal: <a href="/">linkOnModal</a>,
    text: 'test'
  }

  beforeEach(() => {
    props = { ...initialProps }
  })

  describe('isEditingがtrueの場合', () => {
    test('textが表示される', () => {
      const { getByText } = setUp(props)
      expect(getByText(props.text)).toBeInTheDocument()
    })

    test('buttonタグが表示される', () => {
      const { getByRole } = setUp(props)
      expect(getByRole('button')).toBeInTheDocument()
    })

    test('buttonがクリックされた場合、onClickOpenModalが呼ばれる', () => {
      const { getByRole } = setUp(props)
      userEvent.click(getByRole('button'))

      expect(mockOnClickOpenModal).toHaveBeenCalled()
    })
  })

  describe('isEditingがfalseの場合', () => {
    beforeEach(() => {
      props.isEditing = false
    })

    test('defaultLinkが表示される', () => {
      const { getByText } = setUp(props)
      expect(getByText('defaultLink')).toBeInTheDocument()
    })
  })
})
