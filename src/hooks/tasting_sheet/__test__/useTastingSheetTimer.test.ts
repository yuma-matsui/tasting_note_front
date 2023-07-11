import { cleanup, renderHook } from '@testing-library/react'
import React from 'react'

import { TastingSheet } from '../../../types'
import { initialTastingSheet } from '../../../utils'
import useTastingSheetTimer from '../useTastingSheetTimer'

const mockShowToast = jest.fn()
jest.mock('../../context/useToastContext', () => () => ({
  showToast: mockShowToast
}))

const SIXTY_SECONDS = 60
const calculateHalfTime = (stringMinutes: string) => (Number(stringMinutes) * SIXTY_SECONDS) / 2

describe('useTastingSheetTimer', () => {
  let tastingSheet: TastingSheet

  const mockSetInterval = jest.spyOn(window, 'setInterval')
  const mockClearInterval = jest.spyOn(window, 'clearInterval')
  const mockUseState = jest.spyOn(React, 'useState')

  let secondTimer: number
  let isJustBeforeTimeUp: boolean

  const mockSetIsJustBeforeTimeUp = jest.fn()
  const mockSetSecondTimer = jest.fn()

  beforeEach(() => {
    secondTimer = 0
    isJustBeforeTimeUp = false
    tastingSheet = { ...initialTastingSheet, time: '5' }
    mockUseState.mockRestore()
  })

  describe('useEffect', () => {
    beforeEach(() => {
      jest
        .spyOn(React, 'useState')
        .mockReturnValueOnce([isJustBeforeTimeUp, mockSetIsJustBeforeTimeUp])
        .mockReturnValueOnce([secondTimer, mockSetSecondTimer])
    })

    test('実行時にsetSecondTimerが呼ばれる', () => {
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
  })

  describe('secondTimerが0、isJustBeforeTimeUpがtrueの場合', () => {
    beforeEach(() => {
      secondTimer = 0
      isJustBeforeTimeUp = true
      jest
        .spyOn(React, 'useState')
        .mockReturnValueOnce([isJustBeforeTimeUp, mockSetIsJustBeforeTimeUp])
        .mockReturnValueOnce([secondTimer, mockSetSecondTimer])
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

  describe('secondTimerが60以下で0でない場合', () => {
    beforeEach(() => {
      secondTimer = 60
      jest
        .spyOn(React, 'useState')
        .mockReturnValueOnce([true, mockSetIsJustBeforeTimeUp])
        .mockReturnValueOnce([60, mockSetSecondTimer])
    })

    test('showToastが呼ばれる', () => {
      renderHook(() => useTastingSheetTimer(tastingSheet))
      expect(mockShowToast).toHaveBeenCalledWith({
        text: '残り時間1分です',
        type: 'warning'
      })
    })
  })

  describe('secondTimerが引数tastingSheetのtimeの半分の秒数 && 0でない場合', () => {
    beforeEach(() => {
      secondTimer = calculateHalfTime(tastingSheet.time)
      jest
        .spyOn(React, 'useState')
        .mockReturnValueOnce([isJustBeforeTimeUp, mockSetIsJustBeforeTimeUp])
        .mockReturnValueOnce([secondTimer, mockSetSecondTimer])
    })

    test('showToastが呼ばれる', () => {
      renderHook(() => useTastingSheetTimer(tastingSheet))
      expect(mockShowToast).toHaveBeenCalledWith({
        text: '残り時間半分です',
        type: 'warning'
      })
    })
  })

  describe('secondTimerが1の場合', () => {
    beforeEach(() => {
      secondTimer = 1
      jest
        .spyOn(React, 'useState')
        .mockReturnValueOnce([isJustBeforeTimeUp, mockSetIsJustBeforeTimeUp])
        .mockReturnValueOnce([secondTimer, mockSetSecondTimer])
    })

    test('setIsJustBeforeTimeUpが呼ばれる', () => {
      renderHook(() => useTastingSheetTimer(tastingSheet))
      expect(mockSetIsJustBeforeTimeUp).toHaveBeenCalledWith(true)
    })
  })

  describe('timerClassName', () => {
    describe('secondTimerが60以下の場合', () => {
      beforeEach(() => {
        secondTimer = 60
        jest
          .spyOn(React, 'useState')
          .mockReturnValueOnce([isJustBeforeTimeUp, mockSetIsJustBeforeTimeUp])
          .mockReturnValueOnce([secondTimer, mockSetSecondTimer])
      })

      test('text-theme-redが返る', () => {
        const { result } = renderHook(() => useTastingSheetTimer(tastingSheet))
        expect(result.current.timerClassName).toEqual('text-theme-red')
      })
    })

    describe('secondTimerが0、isJustBeforeTimeUpがtrueの場合', () => {
      beforeEach(() => {
        secondTimer = 0
        isJustBeforeTimeUp = true
        jest
          .spyOn(React, 'useState')
          .mockReturnValueOnce([isJustBeforeTimeUp, mockSetIsJustBeforeTimeUp])
          .mockReturnValueOnce([secondTimer, mockSetSecondTimer])
      })

      test('test-theme-redが返る', () => {
        const { result } = renderHook(() => useTastingSheetTimer(tastingSheet))
        expect(result.current.timerClassName).toEqual('text-theme-red')
      })
    })

    describe('secondTimerが引数tastingSheetのtimeの半分の秒数で0でない場合', () => {
      beforeEach(() => {
        secondTimer = calculateHalfTime(tastingSheet.time)
        jest
          .spyOn(React, 'useState')
          .mockReturnValueOnce([isJustBeforeTimeUp, mockSetIsJustBeforeTimeUp])
          .mockReturnValueOnce([secondTimer, mockSetSecondTimer])
      })

      test('test-theme-yellowが返る', () => {
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
        .mockReturnValueOnce([isJustBeforeTimeUp, mockSetIsJustBeforeTimeUp])
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
        .mockReturnValueOnce([isJustBeforeTimeUp, mockSetIsJustBeforeTimeUp])
        .mockReturnValueOnce([leftSecond, mockSetSecondTimer])

      const { result } = renderHook(() => useTastingSheetTimer(tastingSheet))
      expect(result.current.styleForSecond).toEqual({
        '--value': leftSecond % SIXTY_SECONDS
      })
    })
  })
})
