import { renderHook } from '@testing-library/react'

import { WineColor } from '../../types'
import mockUseCheckButtonStatus from '../useCheckButtonStatus'
import useGetButtonClassName from '../useGetButtonClassName'

jest.mock('../useCheckButtonStatus')

const setUp = (color: WineColor, disabled = false, value?: string) => {
  const { result } = renderHook(() => useGetButtonClassName(color, disabled, value))

  return {
    ...result.current
  }
}

describe('useGetButtonClassName', () => {
  let useCheckButtonStatusReturnValue: typeof initialReturnValue
  const initialReturnValue = {
    isBack: false,
    isRed: false,
    isStart: false,
    isWhite: false
  }

  beforeEach(() => {
    useCheckButtonStatusReturnValue = { ...initialReturnValue }
    ;(mockUseCheckButtonStatus as jest.Mock).mockImplementation(() => useCheckButtonStatusReturnValue)
  })

  describe('className', () => {
    test('base-btnが含まれる', () => {
      const { className } = setUp('red')
      expect(className.includes('base-btn')).toBeTruthy()
    })

    test('isBackがtrueの場合、bg-transparent border w-32が含まれる', () => {
      useCheckButtonStatusReturnValue.isBack = true
      ;(mockUseCheckButtonStatus as jest.Mock).mockImplementation(() => useCheckButtonStatusReturnValue)

      const { className } = setUp('red')
      expect(className.includes('bg-transparent border w-32')).toBeTruthy()
    })

    test('isBackがtrue、isWhiteがtrueの場合、border-theme-green text-theme-greenが含まれる', () => {
      useCheckButtonStatusReturnValue = {
        ...initialReturnValue,
        isBack: true,
        isWhite: true
      }
      ;(mockUseCheckButtonStatus as jest.Mock).mockImplementation(() => useCheckButtonStatusReturnValue)

      const { className } = setUp('white')
      expect(className.includes('border-theme-green text-theme-green')).toBeTruthy()
    })

    test('isBackがtrue、isRedがtrueの場合、border-theme-red text-theme-redが含まれる', () => {
      useCheckButtonStatusReturnValue = {
        ...initialReturnValue,
        isBack: true,
        isRed: true
      }
      ;(mockUseCheckButtonStatus as jest.Mock).mockImplementation(() => useCheckButtonStatusReturnValue)

      const { className } = setUp('red')
      expect(className.includes('border-theme-red text-theme-red')).toBeTruthy()
    })

    test('isRedがtrue、isBackがfalseの場合、bg-theme-redが含まれる', () => {
      useCheckButtonStatusReturnValue.isRed = true
      ;(mockUseCheckButtonStatus as jest.Mock).mockImplementation(() => useCheckButtonStatusReturnValue)

      const { className } = setUp('red')
      expect(className.includes('bg-theme-red')).toBeTruthy()
    })

    test('isStartがtrueの場合、bg-theme-redが含まれる', () => {
      useCheckButtonStatusReturnValue.isStart = true
      ;(mockUseCheckButtonStatus as jest.Mock).mockImplementation(() => useCheckButtonStatusReturnValue)

      const { className } = setUp('white')
      expect(className.includes('bg-theme-red')).toBeTruthy()
    })

    test('isStart、isBackがfalse、isWhiteがtrueの場合、bg-theme-greenが含まれる', () => {
      useCheckButtonStatusReturnValue.isWhite = true
      ;(mockUseCheckButtonStatus as jest.Mock).mockImplementation(() => useCheckButtonStatusReturnValue)

      const { className } = setUp('white')
      expect(className.includes('bg-theme-green')).toBeTruthy()
    })

    test('isBack、isStartがfalseの場合、w-44が含まれる', () => {
      const { className } = setUp('red')
      expect(className.includes('w-44')).toBeTruthy()
    })

    test('disabledがtrueの場合、opacity-25が含まれる', () => {
      const disabled = true
      const { className } = setUp('red', disabled)
      expect(className.includes('opacity-25')).toBeTruthy()
    })
  })
})
