import { renderHook } from '@testing-library/react'

import mockDefaultImage from '../../../assets/images/wineGlass.jpg'
import useHasWineAndImage from '../useHasWineAndImage'
import { TastingSheetApi } from '../../../types'
import { initialTastingSheet, wineTestData } from '../../../utils'

jest.mock('../../../assets/images/wineGlass.jpg')

describe('useHasWineAndImage', () => {
  let tastingSheet: TastingSheetApi

  beforeEach(() => {
    tastingSheet = {
      ...initialTastingSheet,
      id: 1,
      createdAt: '',
      wine: null
    }
  })

  describe('hasWine', () => {
    describe('tastingSheetがwineを持たない場合', () => {
      test('falseを返す', () => {
        const { result } = renderHook(() => useHasWineAndImage(tastingSheet))
        expect(result.current.hasWine).toBeFalsy()
      })
    })

    describe('tastingSheetがwineを持つ場合', () => {
      beforeEach(() => {
        tastingSheet.wine = { ...wineTestData }
      })

      test('trueを返す', () => {
        const { result } = renderHook(() => useHasWineAndImage(tastingSheet))
        expect(result.current.hasWine).toBeTruthy()
      })
    })
  })

  describe('hasWineImage', () => {
    describe('tastingSheetがwine.imageを持つ場合', () => {
      beforeEach(() => {
        tastingSheet.wine = {
          ...wineTestData,
          image: 'test'
        }
      })

      test('trueを返す', () => {
        const { result } = renderHook(() => useHasWineAndImage(tastingSheet))
        expect(result.current.hasWineImage).toBeTruthy()
      })
    })

    describe('tastingSheetがwine.imageを持たない場合', () => {
      test('falseを返す', () => {
        tastingSheet.wine = {
          ...wineTestData,
          image: null
        }

        const { result } = renderHook(() => useHasWineAndImage(tastingSheet))
        expect(result.current.hasWineImage).toBeFalsy()
      })
    })
  })

  describe('cardImage', () => {
    describe('tastingSheetがwine.imageを持つ場合', () => {
      const mockImage = 'test'
      beforeEach(() => {
        tastingSheet.wine = {
          ...wineTestData,
          image: mockImage
        }
      })

      test('文字列、https://images.tasting-note.com/{wine.image}を返す', () => {
        const { result } = renderHook(() => useHasWineAndImage(tastingSheet))
        expect(result.current.cardImage).toEqual(`https://images.tasting-note.com/${mockImage}`)
      })
    })

    describe('tastingSheetがwine.imageを持たない場合', () => {
      beforeEach(() => {
        tastingSheet.wine = {
          ...wineTestData,
          image: null
        }
      })

      test('defaultImageを返す', () => {
        const { result } = renderHook(() => useHasWineAndImage(tastingSheet))
        expect(result.current.cardImage).toEqual(mockDefaultImage)
      })
    })
  })
})
