import React from 'react'
import { cleanup, renderHook } from '@testing-library/react'

import { TastingSheet } from '../../../types'
import useTastingSheetTimer from '../useTastingSheetTimer'

const mockShowToast = jest.fn()
jest.mock('../../context/useToastContext', () => () => ({
  showToast: mockShowToast
}))

const SIXTY_SECONDS = 60

describe('useTastingSheetTimer', () => {
  let tastingSheet: TastingSheet

  const mockSetInterval = jest.spyOn(window, 'setInterval')
  const mockClearInterval = jest.spyOn(window, 'clearInterval')
  const mockUseState = jest.spyOn(React, 'useState')

  const mockSetIsJustBeforeTimeUp = jest.fn()
  const mockSetSecondTimer = jest.fn()

  beforeEach(() => {
    tastingSheet = { time: '5' } as TastingSheet
    mockUseState.mockRestore()
  })

  test('実行時にsetSecondTimerが呼ばれる', () => {
    jest
      .spyOn(React, 'useState')
      .mockReturnValueOnce([false, mockSetIsJustBeforeTimeUp])
      .mockReturnValueOnce([0, mockSetSecondTimer])

    renderHook(() => useTastingSheetTimer(tastingSheet))
    expect(mockSetSecondTimer).toHaveBeenCalled()
  })

  test('実行時にsetIntervalが呼ばれる', () => {
    renderHook(() => useTastingSheetTimer(tastingSheet))
    expect(mockSetInterval).toHaveBeenCalledWith(expect.any(Function), 1000)
  })

  test('unmount時にclearIntervalが呼ばれる', () => {
    renderHook(() => useTastingSheetTimer(tastingSheet))
    cleanup()
    expect(mockClearInterval).toHaveBeenCalled()
  })

  describe('secondTimer === 0、isJustBeforeTimeUpがtrueの場合', () => {
    beforeEach(() => {
      jest
        .spyOn(React, 'useState')
        .mockReturnValueOnce([true, mockSetIsJustBeforeTimeUp])
        .mockReturnValueOnce([0, mockSetSecondTimer])
    })

    test('showToastが呼ばれる', () => {
      renderHook(() => useTastingSheetTimer(tastingSheet))
      expect(mockShowToast).toHaveBeenCalledWith({
        text: '時間切れです',
        type: 'error'
      })
    })

    test('clearIntervalが呼ばれる', () => {
      renderHook(() => useTastingSheetTimer(tastingSheet))
      expect(mockClearInterval).toHaveBeenCalled()
    })
  })

  test('secondTimerが60以下で0でない場合、showToastが呼ばれる', () => {
    jest
      .spyOn(React, 'useState')
      .mockReturnValueOnce([true, mockSetIsJustBeforeTimeUp])
      .mockReturnValueOnce([60, mockSetSecondTimer])

    renderHook(() => useTastingSheetTimer(tastingSheet))
    expect(mockShowToast).toHaveBeenCalledWith({
      text: '残り時間1分です',
      type: 'warning'
    })
  })

  test('secondTimerが引数に与えたtastingSheet.timeの半分の秒数で0でない場合、showToastが呼ばれる', () => {
    const halfTime = (Number(tastingSheet.time) * SIXTY_SECONDS) / 2

    jest
      .spyOn(React, 'useState')
      .mockReturnValueOnce([true, mockSetIsJustBeforeTimeUp])
      .mockReturnValueOnce([halfTime, mockSetSecondTimer])

    renderHook(() => useTastingSheetTimer(tastingSheet))
    expect(mockShowToast).toHaveBeenCalledWith({
      text: '残り時間半分です',
      type: 'warning'
    })
  })

  test('secondTimerが1の場合、setIsJustBeforeTimeUpが呼ばれる', () => {
    jest
      .spyOn(React, 'useState')
      .mockReturnValueOnce([true, mockSetIsJustBeforeTimeUp])
      .mockReturnValueOnce([1, mockSetSecondTimer])

    renderHook(() => useTastingSheetTimer(tastingSheet))
    expect(mockSetIsJustBeforeTimeUp).toHaveBeenCalledWith(true)
  })

  describe('timerClassName', () => {
    describe('secondTimerが60以下の場合', () => {
      test('text-theme-redが返る', () => {
        jest
          .spyOn(React, 'useState')
          .mockReturnValueOnce([false, mockSetIsJustBeforeTimeUp])
          .mockReturnValueOnce([30, mockSetSecondTimer])

        const { result } = renderHook(() => useTastingSheetTimer(tastingSheet))
        expect(result.current.timerClassName).toEqual('text-theme-red')
      })
    })

    describe('secondTimerが0、isJustBeforeTimeUpがtrueの場合', () => {
      test('test-theme-redが返る', () => {
        jest
          .spyOn(React, 'useState')
          .mockReturnValueOnce([true, mockSetIsJustBeforeTimeUp])
          .mockReturnValueOnce([0, mockSetSecondTimer])

        const { result } = renderHook(() => useTastingSheetTimer(tastingSheet))
        expect(result.current.timerClassName).toEqual('text-theme-red')
      })
    })

    describe('secondTimerが引数に与えたtastingSheet.timeの半分の秒数で0でない場合', () => {
      test('test-theme-yellowが返る', () => {
        const halfTime = (Number(tastingSheet.time) * SIXTY_SECONDS) / 2
        jest
          .spyOn(React, 'useState')
          .mockReturnValueOnce([true, mockSetIsJustBeforeTimeUp])
          .mockReturnValueOnce([halfTime, mockSetSecondTimer])

        const { result } = renderHook(() => useTastingSheetTimer(tastingSheet))
        expect(result.current.timerClassName).toEqual('text-theme-yellow')
      })
    })

    describe('それ以外の場合', () => {
      test('text-blackが返る', () => {
        const { result } = renderHook(() => useTastingSheetTimer(tastingSheet))
        expect(result.current.timerClassName).toEqual('text-black')
      })
    })
  })

  describe('styleForMinute', () => {
    test('{ "--value": Number(残り分数) } のオブジェクトが返る', () => {
      const leftSecond = 299
      jest
        .spyOn(React, 'useState')
        .mockReturnValueOnce([false, mockSetIsJustBeforeTimeUp])
        .mockReturnValueOnce([leftSecond, mockSetSecondTimer])

      const { result } = renderHook(() => useTastingSheetTimer(tastingSheet))
      expect(result.current.styleForMinute).toEqual({
        '--value': Math.floor(leftSecond / SIXTY_SECONDS)
      })
    })
  })

  describe('styleForSecond', () => {
    test('{ "--value": Number(残り秒数) } のオブジェクトが返る', () => {
      const leftSecond = 300
      jest
        .spyOn(React, 'useState')
        .mockReturnValueOnce([false, mockSetIsJustBeforeTimeUp])
        .mockReturnValueOnce([leftSecond, mockSetSecondTimer])

      const { result } = renderHook(() => useTastingSheetTimer(tastingSheet))
      expect(result.current.styleForSecond).toEqual({
        '--value': leftSecond % SIXTY_SECONDS
      })
    })
  })
})
