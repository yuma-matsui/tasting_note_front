/* eslint-disable @typescript-eslint/no-unsafe-return */

import { render } from '@testing-library/react'

import ErrorFallbackForApi from '../ErrorFallbackForApi'
import { ReactNodeChildren } from '../../../types'

jest.mock('../../molecules/HeadMeta', () => ({ children }: ReactNodeChildren) => (
  <>
    <p>MockedHeadMeta</p>
    {children}
  </>
))

jest.mock('../../templates/DefaultLayout', () => ({ children }: ReactNodeChildren) => (
  <>
    <p>MockedDefaultLayout</p>
    {children}
  </>
))

const mockUseUrgentSignOut = jest.fn()
jest.mock('../../../hooks/auth/useUrgentSignOut', () => () => mockUseUrgentSignOut())

const mockUseShowErrorAndWarningToast = jest.fn()
jest.mock('../../../hooks/useShowErrorAndWarningToast', () => () => mockUseShowErrorAndWarningToast())

const mockUseReloadDisplay = jest.fn()
jest.mock('../../../hooks/useReloadDisplay', () => () => mockUseReloadDisplay())

const setUp = (error: Error) => {
  const utils = render(<ErrorFallbackForApi error={error} resetErrorBoundary={() => {}} />)

  return {
    ...utils
  }
}

describe('ErrorFallbackForApi', () => {
  let error: Error
  const mockConSoleError = jest.spyOn(console, 'error')

  beforeEach(() => {
    error = new Error('test-error')
    mockConSoleError.mockClear()
  })

  test.each([['HeadMeta'], ['DefaultLayout']])('%sが表示される', (componentName) => {
    const { getByText } = setUp(error)
    expect(getByText(`Mocked${componentName}`)).toBeInTheDocument()
  })

  test.each([[mockUseUrgentSignOut], [mockUseReloadDisplay], [mockUseShowErrorAndWarningToast]])(
    '%pが呼ばれる',
    (hooks) => {
      setUp(error)
      expect(hooks).toHaveBeenCalled()
    }
  )

  test('propsのerrorがErrorのインスタンスの場合はconsole.errorが実行される', () => {
    setUp(error)
    expect(mockConSoleError).toHaveBeenCalledWith(error.message)
  })

  test('propsのerrorがErrorのインスタンスではない場合、console.errorは実行されない', () => {
    error = {} as Error
    setUp(error)
    expect(mockConSoleError).not.toHaveBeenCalled()
  })
})
