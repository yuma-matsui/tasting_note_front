import { render } from '@testing-library/react'
import { WineSelectBoxProps } from '../../../../types'
import WineSelectBox from '../WineSelectBox'

const setUp = ({ name, register, options, label }: WineSelectBoxProps) => {
  const utils = render(<WineSelectBox name={name} register={register} options={options} label={label} />)

  return {
    ...utils
  }
}

describe('WineSelectBox', () => {
  const option1 = 'option1'
  const props: WineSelectBoxProps = {
    name: 'wine.name',
    register: jest.fn(),
    options: [option1],
    label: 'test'
  }

  test('labelが表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText(props.label)).toBeInTheDocument()
  })

  test('registerが実行される', () => {
    setUp(props)
    expect(props.register).toHaveBeenCalledWith(props.name, { required: true })
  })

  test('optionsの要素数だけoptionタグが表示される', () => {
    const { getAllByRole } = setUp(props)
    expect(getAllByRole('option').length).toEqual(props.options.length)
  })
})
