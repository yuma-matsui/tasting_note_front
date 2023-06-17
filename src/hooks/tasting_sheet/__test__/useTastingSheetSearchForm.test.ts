import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { FormEvent, ChangeEvent } from 'react'

import useTastingSheetSearchForm from '../useTastingSheetSearchForm'
import { COUNTRIES, GRAPES_RED, GRAPES_WHITE } from '../../../assets'
import { initialFilter } from '../../../utils'

type ReactInputEvent = ChangeEvent<HTMLInputElement>
type ReactSelectEvent = ChangeEvent<HTMLSelectElement>
type ReactFormEvent = FormEvent<HTMLFormElement>

describe('useTastingSheetSearchForm', () => {
  let mockInputEvent: ReactInputEvent
  let mockSelectEvent: ReactSelectEvent
  let mockFormEvent: ReactFormEvent
  const mockPreventDefault = jest.fn()
  const mockSetFilter = jest.fn()

  beforeEach(() => {
    mockInputEvent = {
      target: {
        name: ''
      }
    } as ReactInputEvent

    mockSelectEvent = {
      target: {
        name: ''
      }
    } as ReactSelectEvent

    mockFormEvent = {} as ReactFormEvent
  })

  describe('onSubmit', () => {
    test('preventDefaultが実行される', async () => {
      mockFormEvent.preventDefault = mockPreventDefault
      const { result } = renderHook(() => useTastingSheetSearchForm(mockSetFilter))

      await act(() => result.current.onSubmit(mockFormEvent))
      expect(mockPreventDefault).toHaveBeenCalled()
    })
  })

  describe('color', () => {
    test('初期値は"指定なし"', () => {
      const { result } = renderHook(() => useTastingSheetSearchForm(mockSetFilter))
      expect(result.current.color).toEqual('指定なし')
    })
  })

  describe('country', () => {
    test('初期値は"指定なし"', () => {
      const { result } = renderHook(() => useTastingSheetSearchForm(mockSetFilter))
      expect(result.current.country).toEqual('指定なし')
    })
  })

  describe('grape', () => {
    test('初期値は"指定なし"', () => {
      const { result } = renderHook(() => useTastingSheetSearchForm(mockSetFilter))
      expect(result.current.grape).toEqual('指定なし')
    })
  })

  describe('onChangeColor', () => {
    test('grapeが"指定なし"に変更される', async () => {
      const { result } = renderHook(() => useTastingSheetSearchForm(mockSetFilter))

      mockSelectEvent.target.value = 'カベルネ・ソーヴィニヨン'
      await act(() => result.current.onChangeGrape(mockSelectEvent))
      expect(result.current.grape).toEqual('カベルネ・ソーヴィニヨン')

      await act(() => result.current.onChangeColor(mockInputEvent))
      expect(result.current.grape).toEqual('指定なし')
    })

    test('colorが引数eのtarget.valueの値に変更される', async () => {
      mockInputEvent.target.value = 'test'
      const { result } = renderHook(() => useTastingSheetSearchForm(mockSetFilter))
      await act(() => result.current.onChangeColor(mockInputEvent))
      expect(result.current.color).toEqual('test')
    })

    describe('引数eのtarget.nameがcolorの場合', () => {
      beforeEach(() => {
        mockInputEvent.target.name = 'color'
      })

      test('setFilterが実行される', async () => {
        const { result } = renderHook(() => useTastingSheetSearchForm(mockSetFilter))
        await act(() => result.current.onChangeColor(mockInputEvent))
        expect(mockSetFilter).toHaveBeenCalledWith(expect.any(Function))
      })
    })
  })

  describe('onChangeCountry', () => {
    test('countryが引数eのtarget.valueの値に変更される', async () => {
      mockSelectEvent.target.value = 'test'
      const { result } = renderHook(() => useTastingSheetSearchForm(mockSetFilter))

      await act(() => result.current.onChangeCountry(mockSelectEvent))
      expect(result.current.country).toEqual('test')
    })

    describe('引数eのtarget.nameがcountryの場合', () => {
      beforeEach(() => {
        mockSelectEvent.target.name = 'country'
      })

      test('setFilterが実行される', async () => {
        const { result } = renderHook(() => useTastingSheetSearchForm(mockSetFilter))
        await act(() => result.current.onChangeCountry(mockSelectEvent))
        expect(mockSetFilter).toHaveBeenCalledWith(expect.any(Function))
      })
    })
  })

  describe('onChangeGrape', () => {
    test('grapeが引数eのtarget.valueの値に変更される', async () => {
      mockSelectEvent.target.value = 'test'
      const { result } = renderHook(() => useTastingSheetSearchForm(mockSetFilter))

      await act(() => result.current.onChangeGrape(mockSelectEvent))
      expect(result.current.grape).toEqual('test')
    })

    describe('引数eのtarget.nameがgrapeの場合', () => {
      beforeEach(() => {
        mockSelectEvent.target.name = 'grape'
      })

      test('setFilterが実行される', async () => {
        const { result } = renderHook(() => useTastingSheetSearchForm(mockSetFilter))
        await act(() => result.current.onChangeGrape(mockSelectEvent))
        expect(mockSetFilter).toHaveBeenCalledWith(expect.any(Function))
      })
    })
  })

  describe('countries', () => {
    test('COUNTRIESを返す', () => {
      const { result } = renderHook(() => useTastingSheetSearchForm(mockSetFilter))
      expect(result.current.countries).toEqual(COUNTRIES)
    })
  })

  describe('grapeOptions', () => {
    describe.each([
      ['red', GRAPES_RED],
      ['white', GRAPES_WHITE]
    ])('colorが%sの場合', (color, options) => {
      test(`GRAPES_${color.toUpperCase()}を返す`, async () => {
        mockInputEvent.target.value = color
        const { result } = renderHook(() => useTastingSheetSearchForm(mockSetFilter))

        await act(() => result.current.onChangeColor(mockInputEvent))
        expect(result.current.grapeOptions).toEqual(options)
      })
    })
  })

  describe('onClickAllClear', () => {
    test('setFilterが呼ばれる', async () => {
      const { result } = renderHook(() => useTastingSheetSearchForm(mockSetFilter))
      await act(() => result.current.onClickAllClear())
      expect(mockSetFilter).toHaveBeenCalledWith(initialFilter)
    })

    test('colorが"指定なし"になる', async () => {
      mockInputEvent.target.value = 'test'
      const { result } = renderHook(() => useTastingSheetSearchForm(mockSetFilter))

      await act(() => result.current.onChangeColor(mockInputEvent))
      expect(result.current.color).toEqual('test')

      await act(() => result.current.onClickAllClear())
      expect(result.current.color).toEqual('指定なし')
    })

    test('countryが"指定なし"になる', async () => {
      mockSelectEvent.target.value = 'test'
      const { result } = renderHook(() => useTastingSheetSearchForm(mockSetFilter))

      await act(() => result.current.onChangeCountry(mockSelectEvent))
      expect(result.current.country).toEqual('test')

      await act(() => result.current.onClickAllClear())
      expect(result.current.country).toEqual('指定なし')
    })

    test('grapeが"指定なし"になる', async () => {
      mockSelectEvent.target.value = 'test'
      const { result } = renderHook(() => useTastingSheetSearchForm(mockSetFilter))

      await act(() => result.current.onChangeGrape(mockSelectEvent))
      expect(result.current.grape).toEqual('test')

      await act(() => result.current.onClickAllClear())
      expect(result.current.grape).toEqual('指定なし')
    })
  })
})
