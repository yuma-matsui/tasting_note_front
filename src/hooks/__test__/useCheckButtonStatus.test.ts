import { renderHook } from '@testing-library/react'

import useCheckButtonStatus from '../useCheckButtonStatus'
import { UseCheckButtonStatusProps, WineColor } from '../../types'

const setUp = (props: UseCheckButtonStatusProps) => {
  const { result } = renderHook(() => useCheckButtonStatus(props))

  return {
    ...result.current
  }
}

type TestCases = [WineColor, boolean][]

describe('useCheckButtonStatus', () => {
  let props: UseCheckButtonStatusProps

  beforeEach(() => {
    props = {}
  })

  describe('isBack', () => {
    test.each([
      ['戻る', true],
      ['テスト', false]
    ])('valueが%sの場合、%pが返る', (value, result) => {
      props.value = value
      const { isBack } = setUp(props)
      expect(isBack).toBe(result)
    })
  })

  describe('isNext', () => {
    test.each([
      ['次へ', true],
      ['テスト', false]
    ])('valueが%sの場合、%pが返る', (value, result) => {
      props.value = value
      const { isNext } = setUp(props)
      expect(isNext).toBe(result)
    })
  })

  describe('isStart', () => {
    test.each([
      ['テイスティングをはじめる', true],
      ['テスト', false]
    ])('valueが%sの場合、%pが返る', (value, result) => {
      props.value = value
      const { isStart } = setUp(props)
      expect(isStart).toBe(result)
    })
  })

  describe('isRed', () => {
    const testCases: TestCases = [
      ['red', true],
      ['white', false]
    ]
    test.each(testCases)('colorが%sの場合、%pが返る', (color, result) => {
      props.color = color
      const { isRed } = setUp(props)
      expect(isRed).toBe(result)
    })
  })

  describe('isWhite', () => {
    const testCases: TestCases = [
      ['red', false],
      ['white', true]
    ]
    test.each(testCases)('colorが%sの場合、%pが返る', (color, result) => {
      props.color = color
      const { isWhite } = setUp(props)
      expect(isWhite).toBe(result)
    })
  })
})
