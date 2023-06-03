/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useState as useStateMock } from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { TastingSheetApi } from '../../../../types'
import TastingSheetDetailsTitle from '../TastingSheetDetailsTitle'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}))

jest.mock('../../forms/UpdateSheetNameForm', () => () => <p>MockUpdateSheetNameForm</p>)

const setUp = (tastingSheet: TastingSheetApi) => {
  const utils = render(<TastingSheetDetailsTitle tastingSheet={tastingSheet} />)

  return {
    ...utils
  }
}

describe('TastingSheetDetailsTitle', () => {
  const tastingSheet = {
    name: 'test'
  } as TastingSheetApi
  const mockSetState = jest.fn()

  beforeEach(() => {
    ;(useStateMock as jest.Mock).mockClear()
  })

  describe('isEditingがtrueの場合', () => {
    test('UpdateSheetNameFormが表示される', () => {
      ;(useStateMock as jest.Mock).mockImplementation(() => [true, mockSetState])
      const { getByText } = setUp(tastingSheet)
      expect(getByText('MockUpdateSheetNameForm')).toBeInTheDocument()
    })
  })

  describe('isEditingがfalseの場合', () => {
    beforeEach(() => {
      ;(useStateMock as jest.Mock).mockImplementation(() => [false, mockSetState])
    })

    test('tastingSheet名が表示される', () => {
      const { getByText } = setUp(tastingSheet)
      expect(getByText(tastingSheet.name)).toBeInTheDocument()
    })

    test('変更のbuttonが表示される', () => {
      const { getByRole } = setUp(tastingSheet)
      expect(getByRole('button', { name: '変更' })).toBeInTheDocument()
    })

    test('buttonがクリックされるとsetState関数が呼ばれる', () => {
      const { getByRole } = setUp(tastingSheet)
      userEvent.click(getByRole('button'))

      expect(mockSetState).toHaveBeenCalledWith(true)
    })
  })
})
