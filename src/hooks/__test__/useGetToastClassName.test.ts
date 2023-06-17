import { renderHook } from '@testing-library/react'

import useGetToastClassName from '../useGetToastClassName'
import { ToastType } from '../../types'

const setUp = (type: ToastType) => {
  const { result } = renderHook(() => useGetToastClassName(type))

  return {
    ...result.current
  }
}

type TestCases = [ToastType, string][]

describe('useGetToastClassName', () => {
  const testCases: TestCases = [
    ['success', 'alert-success'],
    ['error', 'alert-error'],
    ['warning', 'alert-warning']
  ]

  describe('toastColorClass', () => {
    test('alertが含まれている', () => {
      const { toastColorClass } = setUp('success')
      expect(toastColorClass.includes('alert')).toBeTruthy()
    })

    test.each(testCases)('typeが%sの場合、%sが含まれている', (type, result) => {
      const { toastColorClass } = setUp(type)
      expect(toastColorClass.includes(result)).toBeTruthy()
    })
  })
})
