import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { User } from 'firebase/auth'

import { PostTastingSheetButtonProps, TastingSheet } from '../../../../types'
import PostTastingSheetButton from '../PostTastingSheetButton'

const mockPostTastingSheet = jest.fn()
jest.mock('../../../../hooks/api/usePostTastingSheet', () => () => ({
  postTastingSheet: mockPostTastingSheet
}))

const mockOnClickOpenModal = jest.fn()
jest.mock('../../../../hooks/useOnClickOpenModal', () => () => ({
  onClickOpenModal: mockOnClickOpenModal
}))

const mockClassName = 'mock-class'
jest.mock('../../../../hooks/useGetButtonClassName', () => () => ({
  className: mockClassName
}))

const setUp = ({ tastingSheet, currentUser }: PostTastingSheetButtonProps) => {
  const utils = render(<PostTastingSheetButton tastingSheet={tastingSheet} currentUser={currentUser} />)

  return {
    ...utils,
    button: screen.getByRole('button')
  }
}

describe('PostTastingSheetButton', () => {
  let props: PostTastingSheetButtonProps
  const initialProps: PostTastingSheetButtonProps = {
    tastingSheet: {} as TastingSheet,
    currentUser: {} as User
  }

  beforeEach(() => {
    props = { ...initialProps }
  })

  test('"提出する"が表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText('提出する')).toBeInTheDocument()
  })

  test('useGetButtonClassNameで取得するclassNameをもつ', () => {
    const { button } = setUp(props)
    expect(button).toHaveClass(mockClassName)
  })

  describe('currenUserが存在する場合', () => {
    test('クリックされた時にpostTastingSheetが呼ばれる', () => {
      const { button } = setUp(props)
      userEvent.click(button)

      expect(mockPostTastingSheet).toHaveBeenCalledWith(props.tastingSheet)
    })
  })

  describe('currentUserが存在しない場合', () => {
    test('クリックされた時にonClickOpenModalが呼ばれる', () => {
      props.currentUser = null
      const { button } = setUp(props)
      userEvent.click(button)

      expect(mockOnClickOpenModal).toHaveBeenCalled()
    })
  })
})
