import { render } from '@testing-library/react'

import { useCheckEditingForm as mockUseCheckEditingForm } from '../../../hooks'
import { FormWrapperProps } from '../../../types'
import TastingSheetFormWrapper from '../TastingSheetFormWrapper'

jest.mock('../../../hooks/useCheckEditingForm')

const mockedTitle = 'mocked-title'
jest.mock('../../../utils/formTitleFormat', () => () => mockedTitle)

const setUp = ({ children, title }: FormWrapperProps) => {
  const utils = render(<TastingSheetFormWrapper title={title}>{children}</TastingSheetFormWrapper>)

  return {
    ...utils
  }
}

describe('TastingSheetFormWrapper', () => {
  let isEditing: boolean
  const props: FormWrapperProps = {
    children: <p>MockedChildren</p>,
    title: 'appearance'
  }

  beforeEach(() => {
    isEditing = false
    ;(mockUseCheckEditingForm as jest.Mock).mockImplementation(() => ({
      isEditing
    }))
  })

  test('childrenが表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText('MockedChildren')).toBeInTheDocument()
  })

  describe('isEditing', () => {
    describe('falseの場合', () => {
      test('見出しが表示されない', () => {
        const { queryByRole } = setUp(props)
        expect(queryByRole('heading')).not.toBeInTheDocument()
      })
    })

    describe('trueの場合', () => {
      beforeEach(() => {
        isEditing = true
        ;(mockUseCheckEditingForm as jest.Mock).mockImplementation(() => ({
          isEditing
        }))
      })

      test('見出しが表示される', () => {
        const { getByRole } = setUp(props)
        expect(getByRole('heading', { name: mockedTitle })).toBeInTheDocument()
      })
    })
  })
})
