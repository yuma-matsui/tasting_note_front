import { render } from '@testing-library/react'

import { AuthFormInputProps } from '../../../../types'
import AuthFormInput from '../AuthFormInput'

const setUp = ({ name, error, label, register }: AuthFormInputProps) => {
  const utils = render(<AuthFormInput name={name} label={label} register={register} error={error} />)

  return {
    ...utils
  }
}

describe('AuthFormInput', () => {
  let props: AuthFormInputProps
  const initialProps: AuthFormInputProps = {
    name: 'email',
    error: undefined,
    label: 'test',
    register: jest.fn()
  }

  beforeEach(() => {
    props = { ...initialProps }
  })

  it('labelが画面に表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText(props.label)).toBeInTheDocument()
  })

  describe('input type', () => {
    const testCases: ['email' | 'password' | 'passwordConfirmation', 'text' | 'password'][] = [
      ['email', 'text'],
      ['password', 'password'],
      ['passwordConfirmation', 'password']
    ]

    it.each(testCases)('nameが%sの場合は%sになる', (type, result) => {
      props.name = type
      const { getByLabelText } = setUp(props)
      expect(getByLabelText(props.label)).toHaveAttribute('type', result)
    })
  })

  describe('error message', () => {
    it('errorが存在する場合はerror messageが表示される', () => {
      props.error = {
        message: 'error'
      }
      const { getByText } = setUp(props)
      expect(getByText('error')).toBeInTheDocument()
    })

    it('errorが存在しない場合はエラーが表示されない', () => {
      const { queryByRole } = setUp(props)
      expect(queryByRole('paragraph')).not.toBeInTheDocument()
    })
  })

  it('registerが呼び出される', () => {
    setUp(props)
    expect(props.register).toHaveBeenCalled()
  })
})
