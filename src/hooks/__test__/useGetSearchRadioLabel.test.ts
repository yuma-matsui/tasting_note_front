import { renderHook } from '@testing-library/react'

import useGetSearchRadioLabel from '../useGetSearchRadioLabel'

const setUp = (color: string) => {
  const { result } = renderHook(() => useGetSearchRadioLabel(color))

  return result.current
}

describe('useGetSearchRadioLabel', () => {
  test.each([
    ['none', '指定なし'],
    ['red', '赤'],
    ['white', '白']
  ])('colorが%sの場合、%sが返る', (color, result) => {
    const label = setUp(color)
    expect(label).toEqual(result)
  })
})
