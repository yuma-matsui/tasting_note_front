/* eslint-disable @typescript-eslint/no-unsafe-return */

import React from 'react'
import { renderHook } from '@testing-library/react'

import useToggleSideBar from '../useToggleSideBar'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}))

const setUp = () => {
  const { result } = renderHook(() => useToggleSideBar())

  return {
    ...result.current
  }
}

describe('useToggleSideBar', () => {
  const mockIsOpen = false
  const mockSetIsOpen = jest.fn()

  beforeEach(() => {
    jest.spyOn(React, 'useState').mockReturnValue([mockIsOpen, mockSetIsOpen])
  })

  describe('isOpen', () => {
    test('useStateで取得したisOpenが返る', () => {
      const { isOpen } = setUp()
      expect(isOpen).toEqual(mockIsOpen)
    })
  })

  describe('onClickToggleSideBar', () => {
    test('実行時にsetIsOpenが実行される', () => {
      const { onClickToggleSideBar } = setUp()
      onClickToggleSideBar()
      expect(mockSetIsOpen).toHaveBeenCalledWith(expect.any(Function))
    })
  })
})
