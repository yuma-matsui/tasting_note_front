/* eslint-disable @typescript-eslint/no-unsafe-return */

import { renderHook } from '@testing-library/react'
import React from 'react'
import Auth from 'react-firebase-hooks/auth'

import useResetPasswordFormParams from '../useResetPasswordFormParams'

jest.mock('firebase/auth')
jest.mock('react-firebase-hooks/auth', () => ({
  ...jest.requireActual('react-firebase-hooks/auth'),
  useSendPasswordResetEmail: jest.fn()
}))
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}))

const setUp = () => {
  const { result } = renderHook(() => useResetPasswordFormParams())

  return {
    ...result.current
  }
}

describe('useResetPasswordFormParams', () => {
  const mockSendEmail = jest.fn()
  const mockLoading = false
  const mockError = undefined
  const mockIsSent = false
  const mockSetIsSent = jest.fn()

  beforeEach(() => {
    jest.spyOn(Auth, 'useSendPasswordResetEmail').mockReturnValue([mockSendEmail, mockLoading, mockError])

    jest.spyOn(React, 'useState').mockReturnValue([mockIsSent, mockSetIsSent])
  })

  describe('sendEmail', () => {
    test('useSendPasswordResetEmailで取得したsendEmail関数が返る', () => {
      const { sendEmail } = setUp()
      expect(sendEmail).toEqual(mockSendEmail)
    })
  })

  describe('loading', () => {
    test('useSendPasswordResetEmailで取得したloadingが返る', () => {
      const { loading } = setUp()
      expect(loading).toEqual(mockLoading)
    })
  })

  describe('error', () => {
    test('useSendPasswordResetEmailで取得したerrorが返る', () => {
      const { error } = setUp()
      expect(error).toEqual(mockError)
    })
  })

  describe('isSent', () => {
    test('useStateで取得したisSentが返る', () => {
      const { isSent } = setUp()
      expect(isSent).toEqual(mockIsSent)
    })
  })

  describe('setIsSent', () => {
    test('useStateで取得したsetIsSentが返る', () => {
      const { setIsSent } = setUp()
      expect(setIsSent).toEqual(mockSetIsSent)
    })
  })
})
