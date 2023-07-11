/* eslint-disable @typescript-eslint/no-unsafe-return */

import { renderHook } from '@testing-library/react'
import { User } from 'firebase/auth'
import { act } from 'react-dom/test-utils'
import ErrorBoundary from 'react-error-boundary'

import { headersTestData } from '../../../utils'
import mockUseAxios from '../../useAxios'
import useCreateUser from '../useCreateUser'

jest.mock('react-error-boundary', () => ({
  ...jest.requireActual('react-error-boundary'),
  useErrorBoundary: jest.fn()
}))

jest.mock('../../useAxios')

describe('useCreateUser', () => {
  const user = {
    email: 'test@example.com',
    uid: 'test'
  } as User

  const mockClient = {
    post: jest.fn()
  }
  const mockGetHeaders = jest.fn()

  beforeEach(() => {
    jest.spyOn(ErrorBoundary, 'useErrorBoundary').mockReturnValue({
      ...jest.requireActual('react-error-boundary'),
      showBoundary: jest.fn()
    })

    mockGetHeaders.mockImplementation(() => headersTestData)
    ;(mockUseAxios as jest.Mock).mockImplementation(() => ({
      client: mockClient,
      getHeaders: mockGetHeaders
    }))
  })

  describe('createUser', () => {
    test('client.postが呼ばれる', async () => {
      const { result } = renderHook(() => useCreateUser())
      await act(() => result.current.createUser(user))
      expect(mockClient.post).toHaveBeenCalledWith(
        '/users',
        {
          user: {
            email: user.email,
            uid: user.uid
          }
        },
        headersTestData
      )
    })
  })
})
