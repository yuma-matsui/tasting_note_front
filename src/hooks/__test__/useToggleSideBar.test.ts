import { cleanup, renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import useToggleSideBar from '../useToggleSideBar'

describe('useToggleSideBar', () => {
  beforeEach(() => {
    cleanup()
  })

  describe('isOpen', () => {
    test('初期値がfalseになる', () => {
      const { result } = renderHook(() => useToggleSideBar())
      expect(result.current.isOpen).toEqual(false)
    })

    test('setIsOpen実行後、trueになる', async () => {
      const { result } = renderHook(() => useToggleSideBar())
      expect(result.current.isOpen).toEqual(false)

      await act(() => result.current.onClickToggleSideBar())
      expect(result.current.isOpen).toEqual(true)
    })
  })
})
