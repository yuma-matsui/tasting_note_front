import { render } from '@testing-library/react'

import { FormWrapperProps } from '../../../types'
import TastingSheetFormWrapper from '../TastingSheetFormWrapper'
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
  const props: FormWrapperProps = {
    title: 'appearance',
    children: <p>MockedChildren</p>
  }

  beforeEach(() => {
    ;(mockUseCheckEditingForm as jest.Mock).mockImplementation(() => ({
      isEditing: false
    }))
  })

  test('childrenが表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText('MockedChildren')).toBeInTheDocument()
  })

  describe('isEditing', () => {
    test('falseの場合、見出しが表示されない', () => {
      const { queryByRole } = setUp(props)
      expect(queryByRole('heading')).not.toBeInTheDocument()
    })

    test('trueの場合、見出しが表示される', () => {
      ;(mockUseCheckEditingForm as jest.Mock).mockImplementation(() => ({
        isEditing: true
      }))
      const { getByRole } = setUp(props)
      expect(getByRole('heading', { name: mockedTitle })).toBeInTheDocument()
    })
  })
})
