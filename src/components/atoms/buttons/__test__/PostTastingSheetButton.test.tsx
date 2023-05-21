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

describe('PostTastingSheetButton', () => {
  const tastingSheet = {} as TastingSheet

  it('"提出する"が表示される', () => {
    render(<PostTastingSheetButton tastingSheet={tastingSheet} />)
    expect(screen.getByText('提出する')).toBeInTheDocument()
  })

  it('useGetButtonClassNameで取得するclassNameをもつ', () => {
    render(<PostTastingSheetButton tastingSheet={tastingSheet} />)
    expect(screen.getByRole('button')).toHaveClass(mockClassName)
  })

  it('currentUserが存在する場合、postTastingSheetが呼ばれる', () => {
    render(<PostTastingSheetButton tastingSheet={tastingSheet} />)
    userEvent.click(screen.getByRole('button'))

    expect(mockPostTastingSheet).toHaveBeenCalledWith(tastingSheet)
  })

  it('currentUserが存在する場合、onClickOpenModalが呼ばれない', () => {
    render(<PostTastingSheetButton tastingSheet={tastingSheet} />)
    userEvent.click(screen.getByRole('button'))

    expect(mockOnClickOpenModal).not.toHaveBeenCalled()
  })
})
