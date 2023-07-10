/* eslint-disable @typescript-eslint/no-unsafe-return */

import React from 'react'
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'

import TastingSheetDetailsTitle from '../TastingSheetDetailsTitle'
import { TastingSheetApi } from '../../../../types'
import { initialTastingSheet } from '../../../../utils'

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
    ...initialTastingSheet,
    id: 1,
    name: 'test',
    createdAt: 'test',
    wine: null
  }
  let isEditing: boolean
  const mockSetIsEditing = jest.fn()

  beforeEach(() => {
    isEditing = false
    jest.spyOn(React, 'useState').mockReturnValue([isEditing, mockSetIsEditing])
  })

  describe('isEditingがtrueの場合', () => {
    beforeEach(() => {
      isEditing = true
      jest.spyOn(React, 'useState').mockReturnValue([isEditing, mockSetIsEditing])
    })

    test('UpdateSheetNameFormが表示される', () => {
      const { getByText } = setUp(tastingSheet)
      expect(getByText('MockUpdateSheetNameForm')).toBeInTheDocument()
    })
  })

  describe('isEditingがfalseの場合', () => {
    test('tastingSheet名が表示される', () => {
      const { getByText } = setUp(tastingSheet)
      expect(getByText(tastingSheet.name)).toBeInTheDocument()
    })

    test('変更のbuttonが表示される', () => {
      const { getByRole } = setUp(tastingSheet)
      expect(getByRole('button', { name: '変更' })).toBeInTheDocument()
    })

    test('buttonがクリックされるとsetIsEditingが呼ばれる', () => {
      const { getByRole } = setUp(tastingSheet)
      userEvent.click(getByRole('button'))

      expect(mockSetIsEditing).toHaveBeenCalledWith(true)
    })
  })
})
