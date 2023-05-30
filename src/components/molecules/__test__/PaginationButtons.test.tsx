import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { PaginationButtonsProps } from '../../../types'
import PaginationButtons from '../PaginationButtons'

const setUp = ({ pageNumber, back, next, isFirstPage, isLastPage }: PaginationButtonsProps) => {
  const utils = render(
    <PaginationButtons
      pageNumber={pageNumber}
      back={back}
      next={next}
      isFirstPage={isFirstPage}
      isLastPage={isLastPage}
    />
  )

  return {
    ...utils
  }
}

describe('PaginationButtonsProps', () => {
  let props: PaginationButtonsProps
  const initialProps: PaginationButtonsProps = {
    pageNumber: 1,
    back: jest.fn(),
    next: jest.fn(),
    isFirstPage: false,
    isLastPage: false
  }

  beforeEach(() => {
    props = { ...initialProps }
  })

  test('pageNumberが表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText(String(props.pageNumber))).toBeInTheDocument()
  })

  describe('isFirstPageがfalseの場合', () => {
    beforeEach(() => {
      props.isFirstPage = false
    })

    test('テキストが「«」のボタンが表示される', () => {
      const { getByRole } = setUp(props)
      expect(getByRole('button', { name: '«' })).toBeInTheDocument()
    })

    test('ボタンが押された場合、backが呼ばれる', () => {
      const { getByRole } = setUp(props)
      userEvent.click(getByRole('button', { name: '«' }))

      expect(props.back).toHaveBeenCalled()
    })
  })

  describe('isLastPageがfalseの場合', () => {
    beforeEach(() => {
      props.isLastPage = false
    })

    test('テキストが「»」のボタンが表示される', () => {
      const { getByRole } = setUp(props)
      expect(getByRole('button', { name: '»' })).toBeInTheDocument()
    })

    test('ボタンが押された場合、nextが呼ばれる', () => {
      const { getByRole } = setUp(props)
      userEvent.click(getByRole('button', { name: '»' }))

      expect(props.next).toHaveBeenCalled()
    })
  })
})
