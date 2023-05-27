import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { SearchSelectBoxProps } from '../../../../types'
import SearchSelectBox from '../SearchSelectBox'

const setUp = ({ options, id, label, onChange, selectedOption }: SearchSelectBoxProps) => {
  const utils = render(
    <SearchSelectBox options={options} id={id} label={label} onChange={onChange} selectedOption={selectedOption} />
  )

  return {
    ...utils
  }
}

describe('SearchSelectBox', () => {
  const option1 = 'option1'

  let props: SearchSelectBoxProps
  const initialProps: SearchSelectBoxProps = {
    options: [option1],
    id: 'test',
    label: 'test',
    onChange: jest.fn(),
    selectedOption: '指定なし'
  }

  beforeEach(() => {
    props = { ...initialProps }
  })

  test('labelが表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText(props.label)).toBeInTheDocument()
  })

  test('name属性にidを持つselectタグが表示される', () => {
    const { getByRole } = setUp(props)
    expect(getByRole('combobox')).toHaveAttribute('name', props.id)
  })

  test('id属性にidを持つselectタグが表示される', () => {
    const { getByRole } = setUp(props)
    expect(getByRole('combobox')).toHaveAttribute('id', props.id)
  })

  test('optionsの要素数 + 1個のoptionタグが表示される', () => {
    const { getAllByRole } = setUp(props)
    expect(getAllByRole('option').length).toEqual(props.options.length + 1)
  })

  test('selectedOptionで与えたoptionがselectedになる', () => {
    props.selectedOption = option1
    const { getByRole } = setUp(props)
    expect(getByRole('option', { name: option1, selected: true })).toBeInTheDocument()
  })

  test('selectタグが操作されたらonChangaが呼ばれる', () => {
    const { getByRole } = setUp(props)
    userEvent.selectOptions(getByRole('combobox'), getByRole('option', { name: option1 }))
    expect(props.onChange).toHaveBeenCalled()
  })
})
