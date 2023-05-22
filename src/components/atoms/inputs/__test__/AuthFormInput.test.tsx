import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from 'react-hook-form'
import { render, screen } from '@testing-library/react'

import { AuthForm } from '../../../../types'
import AuthFormInput from '../AuthFormInput'

type InputType = 'email' | 'password' | 'passwordConfirmation'

describe('AuthFormInput', () => {
  let name: InputType = 'email'
  const label = 'test'
  const mockRegister = jest.fn()
  const register = mockRegister as UseFormRegister<AuthForm>
  let error = {} as Merge<FieldError, FieldErrorsImpl<AuthForm>> | undefined

  beforeEach(() => {
    name = 'email'
    error = {}
  })

  it('labelが画面に表示される', () => {
    render(<AuthFormInput name={name} label={label} register={register} error={error} />)
    expect(screen.getByText(label)).toBeInTheDocument()
  })

  describe('input type', () => {
    const testCases: [InputType, 'text' | 'password'][] = [
      ['email', 'text'],
      ['password', 'password'],
      ['password', 'password']
    ]

    it.each(testCases)('nameが%sの場合は%sになる', (type, result) => {
      name = type
      render(<AuthFormInput name={name} label={label} register={register} error={error} />)
      expect(screen.getByLabelText(label)).toHaveAttribute('type', result)
    })
  })

  describe('error message', () => {
    it('errorが存在する場合はerror messageが表示される', () => {
      error = {
        message: 'error'
      }
      render(<AuthFormInput name={name} label={label} register={register} error={error} />)

      expect(screen.getByText('error')).toBeInTheDocument()
    })

    it('errorが存在しない場合はエラーが表示されない', () => {
      error = undefined
      render(<AuthFormInput name={name} label={label} register={register} error={error} />)

      expect(screen.queryByRole('paragraph')).not.toBeInTheDocument()
    })
  })

  it('registerが呼び出される', () => {
    render(<AuthFormInput name={name} label={label} register={register} error={error} />)
    expect(mockRegister).toHaveBeenCalled()
  })
})
