import { cleanup, renderHook } from '@testing-library/react'

import mockUseToastContext from '../context/useToastContext'
import useShowErrorAndWarningToast from '../useShowErrorAndWarningToast'

jest.mock('../context/useToastContext')

describe('useShowErrorAndWarningToast', () => {
  const mockShowToast = jest.fn()
  const mockSetTimeout = jest.spyOn(global, 'setTimeout')
  const mockClearTimeout = jest.spyOn(global, 'clearTimeout')

  beforeEach(() => {
    ;(mockUseToastContext as jest.Mock).mockImplementation(() => ({
      showToast: mockShowToast
    }))
  })

  test('実行時にshowToastが呼ばれる', () => {
    renderHook(() => useShowErrorAndWarningToast())
    expect(mockShowToast).toHaveBeenCalledWith({
      text: '通信エラーが発生しました',
      type: 'error'
    })
  })

  test('setTimeoutが実行される', () => {
    renderHook(() => useShowErrorAndWarningToast())
    expect(mockSetTimeout).toHaveBeenCalledWith(expect.any(Function), 3000)
  })

  test('unmount時にclearTimeoutが実行される', () => {
    renderHook(() => useShowErrorAndWarningToast())
    cleanup()
    expect(mockClearTimeout).toHaveBeenCalled()
  })
})
