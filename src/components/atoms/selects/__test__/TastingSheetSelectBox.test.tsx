import { render } from '@testing-library/react'

import { TastingSheetSelectBoxProps } from '../../../../types'
import TastingSheetSelectBox from '../TastingSheetSelectBox'

const setUp = ({ id, register, name, options, label }: TastingSheetSelectBoxProps) => {
  const utils = render(
    <TastingSheetSelectBox id={id} register={register} name={name} options={options} label={label} />
  )

  return {
    ...utils
  }
}

describe('TastingSheetSelectBox', () => {
  const props: TastingSheetSelectBoxProps = {
    id: 'test',
    register: jest.fn(),
    name: 'tastingSheet.color',
    options: [],
    label: 'test'
  }

  test('labelが表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText(props.label)).toBeInTheDocument()
  })

  test('registerが実行される', () => {
    setUp(props)
    expect(props.register).toHaveBeenCalled()
  })
})
