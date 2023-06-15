import { renderHook } from '@testing-library/react'
import { TastingSheetApi, TastingSheetStateForWine } from '../../../types'
import useTastingSheetStateForWine from '../useTastingSheetStateForWine'

describe('useTastingSheetStateForWine', () => {
  const state: TastingSheetStateForWine = {
    id: 1,
    name: 'test',
    color: 'red'
  }
  const tastingSheet = {
    ...state
  } as TastingSheetApi

  test('id、name、colorプロパティをもつオブジェクトを返す', () => {
    const { result } = renderHook(() => useTastingSheetStateForWine(tastingSheet))

    expect(result.current).toEqual(state)
  })
})
