import { renderHook } from '@testing-library/react'

import { WineColor } from '../../../types'
import mockUseCheckCheckBoxStatus from '../../useCheckCheckBoxStatus'
import useGetCheckBoxClassName from '../useGetCheckBoxClassName'

jest.mock('../../useCheckCheckBoxStatus')

describe('useGetCheckBoxClassName', () => {
  let type: string
  let color: WineColor

  let useCheckCheckBoxStatusReturnValue: typeof initialReturnValue
  const initialReturnValue = {
    isCheckBox: false,
    isRed: false,
    isWhite: false
  }

  beforeEach(() => {
    type = 'checkbox'
    color = 'red'

    useCheckCheckBoxStatusReturnValue = { ...initialReturnValue }
    ;(mockUseCheckCheckBoxStatus as jest.Mock).mockImplementation(() => useCheckCheckBoxStatusReturnValue)
  })

  test('useCheckCheckBoxStatusが実行される', () => {
    renderHook(() => useGetCheckBoxClassName(type, color))
    expect(mockUseCheckCheckBoxStatus).toHaveBeenCalledWith(type, color)
  })

  describe('className', () => {
    describe('isCheckBoxがfalseの場合', () => {
      test('radio radio-smがclassNameに含まれる', () => {
        const { result } = renderHook(() => useGetCheckBoxClassName(type, color))

        expect(result.current.className.includes('radio radio-sm')).toBeTruthy()
      })
    })

    describe('isCheckBoxがtrueの場合', () => {
      beforeEach(() => {
        useCheckCheckBoxStatusReturnValue.isCheckBox = true
        ;(mockUseCheckCheckBoxStatus as jest.Mock).mockImplementation(() => useCheckCheckBoxStatusReturnValue)
      })

      test('checkbox checkbox-smがclassNameに含まれる', () => {
        const { result } = renderHook(() => useGetCheckBoxClassName(type, color))

        expect(result.current.className.includes('checkbox checkbox-sm')).toBeTruthy()
      })
    })

    describe('isWhiteがtrueの場合', () => {
      beforeEach(() => {
        useCheckCheckBoxStatusReturnValue.isWhite = true
        ;(mockUseCheckCheckBoxStatus as jest.Mock).mockImplementation(() => useCheckCheckBoxStatusReturnValue)
      })

      describe('isCheckBoxがfalseの場合', () => {
        test('radio-successがclassNameに含まれる', () => {
          const { result } = renderHook(() => useGetCheckBoxClassName(type, color))

          expect(result.current.className.includes('radio-success')).toBeTruthy()
        })
      })

      describe('isCheckBoxがtrueの場合', () => {
        beforeEach(() => {
          useCheckCheckBoxStatusReturnValue.isCheckBox = true
          ;(mockUseCheckCheckBoxStatus as jest.Mock).mockImplementation(() => useCheckCheckBoxStatusReturnValue)
        })

        test('checkbox-successがclassNameに含まれる', () => {
          const { result } = renderHook(() => useGetCheckBoxClassName(type, color))

          expect(result.current.className.includes('checkbox-success')).toBeTruthy()
        })
      })
    })

    describe('isRedがtrueの場合', () => {
      beforeEach(() => {
        useCheckCheckBoxStatusReturnValue.isRed = true
        ;(mockUseCheckCheckBoxStatus as jest.Mock).mockImplementation(() => useCheckCheckBoxStatusReturnValue)
      })

      describe('isCheckBoxがfalseの場合', () => {
        test('radio-errorがclassNameに含まれる', () => {
          const { result } = renderHook(() => useGetCheckBoxClassName(type, color))

          expect(result.current.className.includes('radio-error')).toBeTruthy()
        })
      })

      describe('isCheckBoxがtrueの場合', () => {
        beforeEach(() => {
          useCheckCheckBoxStatusReturnValue.isCheckBox = true
          ;(mockUseCheckCheckBoxStatus as jest.Mock).mockImplementation(() => useCheckCheckBoxStatusReturnValue)
        })

        test('checkbox-errorがclassNameに含まれる', () => {
          const { result } = renderHook(() => useGetCheckBoxClassName(type, color))

          expect(result.current.className.includes('checkbox-error')).toBeTruthy()
        })
      })
    })
  })
})
