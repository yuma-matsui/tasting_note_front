import { render } from '@testing-library/react'

import TastingSheetFormWrapper from '../TastingSheetFormWrapper'
import { FormWrapperProps } from '../../../types'
import { useCheckEditingForm as mockUseCheckEditingForm } from '../../../hooks'

jest.mock('../../../hooks/useCheckEditingForm')

const mockedTitle = 'mocked-title'
jest.mock('../../../utils/formTitleFormat', () => () => mockedTitle)

const setUp = ({ title, children }: FormWrapperProps) => {
  const utils = render(<TastingSheetFormWrapper title={title}>{children}</TastingSheetFormWrapper>)

  return {
    ...utils
  }
}

describe('TastingSheetFormWrapper', () => {
  let isEditing: boolean
  const props: FormWrapperProps = {
    title: 'appearance',
    children: <p>MockedChildren</p>
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
