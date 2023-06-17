import { cleanup, renderHook } from '@testing-library/react'

import useReloadDisplay from '../useReloadDisplay'

describe('useReloadDisplay', () => {
  const mockSetTimeOut = jest.spyOn(global, 'setTimeout')
  const mockClearTimeOut = jest.spyOn(global, 'clearTimeout')

  test('実行時にsetTimeoutが実行される', () => {
    renderHook(() => useReloadDisplay())
    expect(mockSetTimeOut).toHaveBeenCalledWith(expect.any(Function), 8000)
  })

  test('unmount時にclearTimeOutが呼ばれる', () => {
    renderHook(() => useReloadDisplay())
    cleanup()
    expect(mockClearTimeOut).toHaveBeenCalled()
  })
})
