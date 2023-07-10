/* eslint-disable @typescript-eslint/no-unsafe-return */

import { renderHook } from '@testing-library/react'
import { User } from 'firebase/auth'

import useAxios from '../useAxios'
import { client } from '../../lib'

describe('useAxios', () => {
  test('client', () => {
    const { result } = renderHook(() => useAxios())
    expect(result.current.client).toBe(client)
  })

  test('getHeaders', async () => {
    const mockedUser = {
      getIdToken: () => {
        jest.fn()
      }
    } as User

    const { result } = renderHook(() => useAxios())
    expect((await result.current.getHeaders(mockedUser)).headers.Authorization.includes('Bearer')).toBeTruthy()
  })
})
