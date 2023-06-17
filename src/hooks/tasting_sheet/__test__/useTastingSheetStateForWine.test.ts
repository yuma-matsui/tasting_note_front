import { renderHook } from '@testing-library/react'

import { TastingSheetStateForWine } from '../../../types'
import useTastingSheetStateForWine from '../useTastingSheetStateForWine'
import { initialTastingSheet } from '../../../utils'

describe('useTastingSheetStateForWine', () => {
  const state: TastingSheetStateForWine = {
    id: 1,
    name: 'test',
    color: 'red'
  }
  const tastingSheet = {
    ...initialTastingSheet,
    createdAt: '',
    wine: null,
    id: state.id,
    color: state.color,
    name: state.name
  }

  test('id、name、colorプロパティをもつオブジェクトを返す', () => {
    const { result } = renderHook(() => useTastingSheetStateForWine(tastingSheet))
    expect(result.current).toEqual(state)
  })
})
