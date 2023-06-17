import { cleanup, renderHook } from '@testing-library/react'

import useBeforeUnload from '../useBeforeUnload'

describe('useBeforeUnload', () => {
  const mockAddEventListener = jest.spyOn(window, 'addEventListener')
  const mockRemoveEventListener = jest.spyOn(window, 'removeEventListener')

  test('addEventListenerが呼ばれる', () => {
    renderHook(() => useBeforeUnload())
    expect(mockAddEventListener).toHaveBeenCalledWith('beforeunload', expect.any(Function))
  })

  test('unmount時にremoveEventListenerが呼ばれる', () => {
    renderHook(() => useBeforeUnload())
    cleanup()
    expect(mockRemoveEventListener).toHaveBeenCalledWith('beforeunload', expect.any(Function))
  })
})
