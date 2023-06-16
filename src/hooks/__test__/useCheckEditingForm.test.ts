/* eslint-disable @typescript-eslint/no-unsafe-return */

import { renderHook } from '@testing-library/react'
import Router from 'react-router-dom'

import useCheckEditingForm from '../useCheckEditingForm'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn()
}))

const setUp = () => {
  const { result } = renderHook(() => useCheckEditingForm())

  return {
    ...result.current
  }
}

describe('useCheckEditingForm', () => {
  describe('isEditing', () => {
    test.each([
      ['/tasting_sheets/new', true],
      ['/wines', true],
      ['/tasting_sheets/1', false],
      ['/pp', false]
    ])('useLocationで取得したpathnameが$sの場合、%pを返す', (pathname, result) => {
      jest.spyOn(Router, 'useLocation').mockReturnValue({
        ...jest.requireActual('react-router-dom'),
        pathname
      })

      const { isEditing } = setUp()
      expect(isEditing).toBe(result)
    })
  })
})
