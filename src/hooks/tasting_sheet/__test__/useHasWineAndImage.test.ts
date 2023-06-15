import { renderHook } from '@testing-library/react'

import mockDefaultImage from '../../../assets/images/wineGlass.jpg'
import { TastingSheetApi, WineApi } from '../../../types'
import useHasWineAndImage from '../useHasWineAndImage'

jest.mock('../../../assets/images/wineGlass.jpg')

describe('useHasWineAndImage', () => {
  let tastingSheet: TastingSheetApi

  beforeEach(() => {
    tastingSheet = {} as TastingSheetApi
  })

  describe('hasWine', () => {
    describe('tastingSheetがwineを持たない場合', () => {
      beforeEach(() => {
        tastingSheet.wine = null
      })

      test('falseを返す', () => {
        const { result } = renderHook(() => useHasWineAndImage(tastingSheet))
        expect(result.current.hasWine).toBeFalsy()
      })
    })

    describe('tastingSheetがwineを持つ場合', () => {
      beforeEach(() => {
        tastingSheet.wine = {} as WineApi
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
          image: 'test'
        } as WineApi
      })

      test('trueを返す', () => {
        const { result } = renderHook(() => useHasWineAndImage(tastingSheet))

        expect(result.current.hasWineImage).toBeTruthy()
      })
    })

    describe('tastingSheetがwine.imageを持たない場合', () => {
      beforeEach(() => {
        tastingSheet.wine = {
          image: null
        } as WineApi
      })

      test('falseを返す', () => {
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
          image: mockImage
        } as WineApi
      })

      test('文字列、https://images.tasting-note.com/{wine.image}を返す', () => {
        const { result } = renderHook(() => useHasWineAndImage(tastingSheet))
        expect(result.current.cardImage).toEqual(`https://images.tasting-note.com/${mockImage}`)
      })
    })

    describe('tastingSheetがwine.imageを持たない場合', () => {
      beforeEach(() => {
        tastingSheet.wine = {
          image: null
        } as WineApi
      })

      test('defaultImageを返す', () => {
        const { result } = renderHook(() => useHasWineAndImage(tastingSheet))
        expect(result.current.cardImage).toEqual(mockDefaultImage)
      })
    })
  })
})
