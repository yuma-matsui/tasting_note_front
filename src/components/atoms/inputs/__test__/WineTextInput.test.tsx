import { render } from '@testing-library/react'

import WineTextInput from '../WineTextInput'
import { WineTextInputProps } from '../../../../types'

const setUp = ({ name, label, register, required, errors }: WineTextInputProps) => {
  const utils = render(
    <WineTextInput name={name} label={label} register={register} required={required} errors={errors} />
  )

  return {
    ...utils
  }
}

describe('WineTextInput', () => {
  let props: WineTextInputProps
  const initialProps: WineTextInputProps = {
    name: 'wine.name',
    label: 'test',
    register: jest.fn(),
    required: true,
    errors: undefined
  }

  beforeEach(() => {
    props = { ...initialProps }
  })

  it('labelが表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText(props.label)).toBeInTheDocument()
  })

  describe('name', () => {
    it('nameがwine.nameの場合は"任意"が表示されない', () => {
      const { queryByText } = setUp(props)
      expect(queryByText('任意')).not.toBeInTheDocument()
    })

    it('wine.name以外の場合は"任意"が表示される', () => {
      props.name = 'wine.memo'
      const { getByText } = setUp(props)
      expect(getByText('任意')).toBeInTheDocument()
    })
  })

  it('registerが実行される', () => {
    setUp(props)
    expect(props.register).toHaveBeenCalledWith(props.name, { required: props.required })
  })

  describe('errors', () => {
    it('errorsが存在しない場合はエラーメッセージが表示されない', () => {
      const { queryByRole } = setUp(props)
      expect(queryByRole('paragraph')).not.toBeInTheDocument()
    })

    it('errorsが存在する場合は"入力必須です"が表示される', () => {
      props.errors = {}
      const { getByText } = setUp(props)
      expect(getByText('入力必須です')).toBeInTheDocument()
    })
  })
})
