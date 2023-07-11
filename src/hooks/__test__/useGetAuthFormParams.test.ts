/* eslint-disable @typescript-eslint/no-unsafe-return */

import { renderHook } from '@testing-library/react'
import Auth from 'react-firebase-hooks/auth'
import Router from 'react-router-dom'

import { UseGetAuthFormParamsProps } from '../../types'
import useGetAuthFormParams from '../useGetAuthFormParams'

type TestCases = ['signIn' | 'signUp', string | boolean | undefined | jest.Mock][]

jest.mock('firebase/auth', () => ({
  ...jest.requireActual('firebase/auth'),
  getAuth: jest.fn()
}))

jest.mock('react-firebase-hooks/auth', () => ({
  ...jest.requireActual('react-firebase-hooks/auth'),
  useCreateUserWithEmailAndPassword: jest.fn(),
  useSignInWithEmailAndPassword: jest.fn()
}))

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn()
}))

const setUp = (props: UseGetAuthFormParamsProps) => {
  const { result } = renderHook(() => useGetAuthFormParams(props))

  return {
    ...result.current
  }
}

describe('useGetAuthFormParams', () => {
  let props: UseGetAuthFormParamsProps
  const state = { name: 'test' }

  const mockCreateUserWithEmailAndPassword = jest.fn()
  const mockCreateLoading = false
  const mockCreateError = undefined

  const mockSignInWithEmailAndPassword = jest.fn()
  const mockSignInLoading = false
  const mockSignInError = undefined

  beforeEach(() => {
    jest.spyOn(Router, 'useLocation').mockReturnValue({
      ...jest.requireActual('react-router-dom'),
      state
    })

    jest
      .spyOn(Auth, 'useCreateUserWithEmailAndPassword')
      .mockReturnValue([mockCreateUserWithEmailAndPassword, undefined, mockCreateLoading, mockCreateError])

    jest
      .spyOn(Auth, 'useSignInWithEmailAndPassword')
      .mockReturnValue([mockSignInWithEmailAndPassword, undefined, mockSignInLoading, mockSignInError])

    props = { type: 'signIn' }
  })

  describe('type', () => {
    const testCases: TestCases = [
      ['signIn', 'signIn'],
      ['signUp', 'signUp']
    ]
    test.each(testCases)('引数に与えた%sが返ってくる', (propsType, result) => {
      props.type = propsType

      const { type } = setUp(props)
      expect(type).toEqual(result)
    })
  })

  describe('tastingSheet', () => {
    test('useLocationで取得したlocation.stateの値が返る', () => {
      const { tastingSheet } = setUp(props)
      expect(tastingSheet).toBe(state)
    })
  })

  describe('authFunction', () => {
    const testCases: TestCases = [
      ['signIn', mockSignInWithEmailAndPassword],
      ['signUp', mockCreateUserWithEmailAndPassword]
    ]
    test.each(testCases)('typeが%sの場合、%pが返る', (type, result) => {
      props.type = type
      const { authFunction } = setUp(props)
      expect(authFunction).toEqual(result)
    })
  })

  describe('loading', () => {
    const testCases: TestCases = [
      ['signIn', mockSignInLoading],
      ['signUp', mockCreateLoading]
    ]
    test.each(testCases)('typeが%sの場合、%pが返る', (type, result) => {
      props.type = type
      const { loading } = setUp(props)
      expect(loading).toEqual(result)
    })
  })

  describe('authError', () => {
    const testCases: TestCases = [
      ['signIn', mockSignInError],
      ['signUp', mockCreateError]
    ]
    test.each(testCases)('typeが%sの場合、%pが返る', (type, result) => {
      props.type = type
      const { authError } = setUp(props)
      expect(authError).toEqual(result)
    })
  })
})
