import { renderHook } from '@testing-library/react'

import useReloadDisplay from '../useReloadDisplay'

describe('useReloadDisplay', () => {
  const mockSetTimeOut = jest.spyOn(global, 'setTimeout')

  test('実行時にsetTimeoutが実行される', () => {
    renderHook(() => useReloadDisplay())
    expect(mockSetTimeOut).toHaveBeenCalledWith(expect.any(Function), 8000)
  })
})
