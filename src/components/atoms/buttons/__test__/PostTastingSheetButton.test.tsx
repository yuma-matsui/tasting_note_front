import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { PostTastingSheetButtonProps, TastingSheet } from '../../../../types'
import PostTastingSheetButton from '../PostTastingSheetButton'

const mockPostTastingSheet = jest.fn()
jest.mock('../../../../hooks/api/usePostTastingSheet', () => () => ({
  postTastingSheet: mockPostTastingSheet
}))

const mockClassName = 'mock-class'
jest.mock('../../../../hooks/useGetButtonClassName', () => () => ({
  className: mockClassName
}))

const setUp = ({ tastingSheet }: PostTastingSheetButtonProps) => {
  const utils = render(<PostTastingSheetButton tastingSheet={tastingSheet} />)

  return {
    ...utils,
    button: screen.getByRole('button')
  }
}

describe('PostTastingSheetButton', () => {
  let props: PostTastingSheetButtonProps
  const initialProps: PostTastingSheetButtonProps = {
    tastingSheet: {} as TastingSheet
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

  test('クリックされた時にpostTastingSheetが実行される', () => {
    const { button } = setUp(props)
    userEvent.click(button)

    expect(mockPostTastingSheet).toHaveBeenCalled()
  })
})
