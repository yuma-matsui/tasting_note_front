import { renderHook } from '@testing-library/react'

import useTastingSheetInputsAttributes from '../useTastingSheetInputAttributes'

describe('useTastingSheetInputAttributes', () => {
  let label: string
  beforeEach(() => {
    label = 'test'
  })

  describe('isMultipleInputs', () => {
    test.each([
      ['test', false],
      [null, false],
      [['test', 'test'], true]
    ])('引数に%pを渡した場合、%pになる', (value, result) => {
      const {
        result: { current }
      } = renderHook(() => useTastingSheetInputsAttributes())

      expect(current.isMultipleInputs(value)).toEqual(result)
    })
  })

  describe('isDisabled', () => {
    describe('引数のvalueがstringまたはnullの場合', () => {
      test.each([['test'], [null]])('falseを返す', (value) => {
        const { result } = renderHook(() => useTastingSheetInputsAttributes())

        expect(result.current.isDisabled(value, label)).toBeFalsy()
      })
    })

    describe('引数のvalueが配列の場合', () => {
      let value: string[]
      beforeEach(() => {
        value = [label, label]
      })

      describe('valueの要素数が2の場合', () => {
        describe('引数のlabelがvalueに含まれない場合', () => {
          test('trueを返す', () => {
            label = ''
            const { result } = renderHook(() => useTastingSheetInputsAttributes())

            expect(result.current.isDisabled(value, label)).toBeTruthy()
          })
        })

        describe('引数のlabelがvalueに含まれる場合', () => {
          test('falseを返す', () => {
            const { result } = renderHook(() => useTastingSheetInputsAttributes())

            expect(result.current.isDisabled(value, label)).toBeFalsy()
          })
        })
      })

      describe('valueの要素数が2以外の場合', () => {
        test('falseを返す', () => {
          value.pop()
          const { result } = renderHook(() => useTastingSheetInputsAttributes())

          expect(result.current.isDisabled(value, label)).toBeFalsy()
        })
      })
    })
  })

  describe('isChecked', () => {
    let checkedLabel: string | null | string[]

    beforeEach(() => {
      checkedLabel = null
    })

    describe('引数のcheckedLabelが配列の場合', () => {
      describe('引数のlabelがcheckedLabelに含まれている場合', () => {
        test('trueを返す', () => {
          checkedLabel = [label, label]
          const { result } = renderHook(() => useTastingSheetInputsAttributes())

          expect(result.current.isChecked(checkedLabel, label)).toBeTruthy()
        })
      })

      describe('引数のlabelがcheckedLabelに含まれていない場合', () => {
        checkedLabel = []
        const { result } = renderHook(() => useTastingSheetInputsAttributes())

        expect(result.current.isChecked(checkedLabel, label)).toBeFalsy()
      })
    })

    describe('引数のcheckedLabelがnullの場合', () => {
      test('falseを返す', () => {
        const { result } = renderHook(() => useTastingSheetInputsAttributes())

        expect(result.current.isChecked(checkedLabel, label)).toBeFalsy()
      })
    })

    describe('引数のcheckedLabelがstringの場合', () => {
      beforeEach(() => {
        checkedLabel = 'test'
      })

      describe('引数のlabelがcheckedLabelと一致する場合', () => {
        test('trueを返す', () => {
          const { result } = renderHook(() => useTastingSheetInputsAttributes())

          expect(result.current.isChecked(checkedLabel, label)).toBeTruthy()
        })
      })

      describe('引数のlabelがcheckedLabelと一致しない場合', () => {
        test('falseを返す', () => {
          label = ''
          const { result } = renderHook(() => useTastingSheetInputsAttributes())

          expect(result.current.isChecked(checkedLabel, label)).toBeFalsy()
        })
      })
    })
  })

  describe('getValidationMethod', () => {
    describe('引数のvalueがstringまたはnullの場合', () => {
      test.each([['test'], [null]])('oneRequiredプロパティを持つオブジェクトを返す', (value) => {
        const { result } = renderHook(() => useTastingSheetInputsAttributes())

        expect(result.current.getValidationMethod(value).oneRequired).toBeTruthy()
      })
    })

    describe('引数のvalueが配列の場合', () => {
      test('twoRequiredプロパティを持つオブジェクトを返す', () => {
        const { result } = renderHook(() => useTastingSheetInputsAttributes())

        expect(result.current.getValidationMethod([]).twoRequired).toBeTruthy()
      })
    })
  })
})
