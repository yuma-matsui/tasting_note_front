import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { TastingSheet } from '../../../../types'
import PostTastingSheetButton from '../PostTastingSheetButton'

const mockCurrentUser = 'test-user'
jest.mock('../../../../hooks/context/useAuthContext', () => () => ({
  currentUser: mockCurrentUser
}))

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

const setUp = ({ tastingSheet }: { tastingSheet: TastingSheet }) => {
  const utils = render(<PostTastingSheetButton tastingSheet={tastingSheet} />)

  return {
    ...utils,
    button: screen.getByRole('button')
  }
}

describe('PostTastingSheetButton', () => {
  const tastingSheet = {} as TastingSheet

  it('"提出する"が表示される', () => {
    const { getByText } = setUp({ tastingSheet })
    expect(getByText('提出する')).toBeInTheDocument()
  })

  it('useGetButtonClassNameで取得するclassNameをもつ', () => {
    const { button } = setUp({ tastingSheet })
    expect(button).toHaveClass(mockClassName)
  })

  it('currentUserが存在する場合、postTastingSheetが呼ばれる', () => {
    const { button } = setUp({ tastingSheet })
    userEvent.click(button)

    expect(mockPostTastingSheet).toHaveBeenCalledWith(tastingSheet)
  })

  it('currentUserが存在する場合、onClickOpenModalが呼ばれない', () => {
    const { button } = setUp({ tastingSheet })
    userEvent.click(button)

    expect(mockOnClickOpenModal).not.toHaveBeenCalled()
  })
})
