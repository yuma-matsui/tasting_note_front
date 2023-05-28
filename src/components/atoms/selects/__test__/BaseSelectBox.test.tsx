import { render } from '@testing-library/react'

import { TastingSheetSelectBoxProps } from '../../../../types'
import BaseSelectBox from '../BaseSelectBox'

const setUp = ({ id, register, name, options, label }: TastingSheetSelectBoxProps) => {
  const utils = render(<BaseSelectBox id={id} register={register} name={name} options={options} label={label} />)

  return {
    ...utils
  }
}

describe('BaseSelectBox', () => {
  let props: TastingSheetSelectBoxProps
  const initialProps: TastingSheetSelectBoxProps = {
    id: 'test',
    register: jest.fn(),
    name: 'tastingSheet.color',
    options: ['option1', 'options2'],
    label: 'test'
  }

  beforeEach(() => {
    props = { ...initialProps }
  })

  test('registerが実行される', () => {
    setUp(props)
    expect(props.register).toHaveBeenCalledWith(props.name, { required: true })
  })

  test('label + を選択してくださいが表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText(`${props.label}を選択してください`)).toBeInTheDocument()
  })

  test('label + を選択してくださいのoptionタグがdisabled', () => {
    const { getByRole } = setUp(props)
    expect(getByRole('option', { name: `${props.label}を選択してください` })).toBeDisabled()
  })

  test('optionsの要素数 + 1個、optionタグが表示される', () => {
    const { getAllByRole } = setUp(props)
    expect(getAllByRole('option').length).toEqual(props.options.length + 1)
  })
})
