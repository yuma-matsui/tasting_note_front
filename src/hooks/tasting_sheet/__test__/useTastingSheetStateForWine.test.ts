import { renderHook } from '@testing-library/react'

import { TastingSheetStateForWine } from '../../../types'
import { initialTastingSheet } from '../../../utils'
import useTastingSheetStateForWine from '../useTastingSheetStateForWine'

describe('useTastingSheetStateForWine', () => {
  const state: TastingSheetStateForWine = {
    id: 1,
    name: 'test',
    color: 'red'
  }
  const tastingSheet = {
    ...initialTastingSheet,
    id: state.id,
    name: state.name,
    color: state.color,
    createdAt: '',
    wine: null
  }

  test('id、name、colorプロパティをもつオブジェクトを返す', () => {
    const { result } = renderHook(() => useTastingSheetStateForWine(tastingSheet))
    expect(result.current).toEqual(state)
  })
})
