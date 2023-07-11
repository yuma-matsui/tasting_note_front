import { renderHook } from '@testing-library/react'
import React, { ReactElement } from 'react'
import { act } from 'react-dom/test-utils'

import useMultiStepForm from '../useMultiStepForm'

describe('useMultiStepForm', () => {
  const mockWindowScroll = jest.spyOn(window, 'scroll')
  const mockRef = {} as React.RefObject<HTMLInputElement>

  const step1 = <p>step1</p>
  const step2 = <p>step2</p>
  const step3 = <p>step3</p>

  const steps: ReactElement[] = [step1, step2, step3]

  test('実行時にwindow.scrollが実行される', () => {
    renderHook(() => useMultiStepForm(steps))
    expect(mockWindowScroll).toHaveBeenCalledWith(0, 0)
  })

  test('currentStepIndexの値が変わるとwindow.scrollが実行される', async () => {
    const { result } = renderHook(() => useMultiStepForm(steps))

    await act(() => result.current.onClickPageControl('next', mockRef))
    expect(mockWindowScroll).toHaveBeenCalledTimes(2)
  })

  describe('currentStepIndex', () => {
    test('初期値は0になる', () => {
      const { result } = renderHook(() => useMultiStepForm(steps))
      expect(result.current.currentStepIndex).toEqual(0)
    })
  })

  describe('steps', () => {
    test('引数に与えたstepsが返る', () => {
      const { result } = renderHook(() => useMultiStepForm(steps))
      expect(result.current.steps).toMatchObject(steps)
    })
  })

  describe('step', () => {
    test('stepsのindexがcurrentStepIndexの要素を返す', async () => {
      const { result } = renderHook(() => useMultiStepForm(steps))

      expect(result.current.step).toEqual(step1)

      await act(() => result.current.onClickPageControl('next', mockRef))
      expect(result.current.step).toEqual(step2)
    })
  })

  describe('isFirstStep', () => {
    test('初期値はtrue', () => {
      const { result } = renderHook(() => useMultiStepForm(steps))
      expect(result.current.isFirstStep).toBeTruthy()
    })

    test('currentStepIndexが0以外の場合falseになる', async () => {
      const { result } = renderHook(() => useMultiStepForm(steps))
      await act(() => result.current.onClickPageControl('next', mockRef))
      expect(result.current.isFirstStep).toBeFalsy()
    })
  })

  describe('isLastStep', () => {
    test('初期値はfalse', () => {
      const { result } = renderHook(() => useMultiStepForm(steps))
      expect(result.current.isLastStep).toBeFalsy()
    })

    test('currentStepIndexがstepsの要素数-1の場合はtrueになる', async () => {
      const { result } = renderHook(() => useMultiStepForm(steps))

      await act(() => {
        for (let index = 0; index < steps.length; index += 1) {
          result.current.onClickPageControl('next', mockRef)
        }
      })

      expect(result.current.currentStepIndex).toEqual(steps.length - 1)
      expect(result.current.isLastStep).toBeTruthy()
    })
  })

  describe('isAppearanceStep', () => {
    test('初期値はfalse', () => {
      const { result } = renderHook(() => useMultiStepForm(steps))
      expect(result.current.isAppearanceStep).toBeFalsy()
    })

    test('currentStepIndexが1の場合はtrueになる', async () => {
      const { result } = renderHook(() => useMultiStepForm(steps))
      await act(() => result.current.onClickPageControl('next', mockRef))
      expect(result.current.isAppearanceStep).toBeTruthy()
    })
  })

  describe('onClickPageControl', () => {
    describe('引数に"next"が渡された場合', () => {
      describe('currentStepIndexがstepsの要素数-1の場合', () => {
        test('currentStepIndexの値は変わらない', async () => {
          const { result } = renderHook(() => useMultiStepForm(steps))

          await act(() => {
            for (let index = 0; index < steps.length; index += 1) {
              result.current.onClickPageControl('next', mockRef)
            }
          })

          const { currentStepIndex } = result.current
          await act(() => result.current.onClickPageControl('next', mockRef))
          expect(currentStepIndex).toEqual(result.current.currentStepIndex)
        })
      })

      describe('それ以外の場合', () => {
        test('currentStepIndexが+1される', async () => {
          const { result } = renderHook(() => useMultiStepForm(steps))

          const { currentStepIndex } = result.current
          await act(() => result.current.onClickPageControl('next', mockRef))
          expect(result.current.currentStepIndex).toEqual(currentStepIndex + 1)
        })
      })
    })

    describe('引数に"back"が渡された場合', () => {
      describe('currentStepIndexが0の場合', () => {
        test('currentStepIndexの値は変わらない', async () => {
          const { result } = renderHook(() => useMultiStepForm(steps))

          const { currentStepIndex } = result.current
          await act(() => result.current.onClickPageControl('back', mockRef))
          expect(currentStepIndex).toEqual(result.current.currentStepIndex)
        })
      })

      describe('それ以外の場合', () => {
        test('currentStepIndexが-1される', async () => {
          const { result } = renderHook(() => useMultiStepForm(steps))

          await act(() => result.current.onClickPageControl('next', mockRef))

          const { currentStepIndex } = result.current
          await act(() => result.current.onClickPageControl('back', mockRef))
          expect(result.current.currentStepIndex).toEqual(currentStepIndex - 1)
        })
      })
    })
  })

  describe('getButtonText', () => {
    describe('isFirstStepがtrueの場合', () => {
      test('テイスティングをはじめるが返る', () => {
        const { result } = renderHook(() => useMultiStepForm(steps))
        expect(result.current.getButtonText('back')).toEqual('テイスティングをはじめる')
      })
    })

    describe('isFirstStepがfalse、引数にbackが渡された場合', () => {
      test('"戻る"が返る', async () => {
        const { result } = renderHook(() => useMultiStepForm(steps))
        await act(() => result.current.onClickPageControl('next', mockRef))
        expect(result.current.getButtonText('back')).toEqual('戻る')
      })
    })

    describe('currentStepIndexがstepsの要素数-2、引数にnextが渡された場合', () => {
      test('回答確認が返る', async () => {
        const { result } = renderHook(() => useMultiStepForm(steps))

        await act(() => result.current.onClickPageControl('next', mockRef))
        expect(result.current.currentStepIndex).toEqual(steps.length - 2)
        expect(result.current.getButtonText('next')).toEqual('回答確認')
      })
    })

    describe('それ以外の場合', () => {
      test('次へが返る', async () => {
        const { result } = renderHook(() => useMultiStepForm(steps))

        await act(() => {
          for (let index = 0; index < steps.length; index += 1) {
            result.current.onClickPageControl('next', mockRef)
          }
        })

        expect(result.current.getButtonText('next')).toEqual('次へ')
      })
    })
  })
})
