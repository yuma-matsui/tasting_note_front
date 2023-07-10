import { render } from '@testing-library/react'

import TastingSheetSelectBox from '../TastingSheetSelectBox'
import { TastingSheetSelectBoxProps } from '../../../../types'

const setUp = ({ id, name, label, options, register }: TastingSheetSelectBoxProps) => {
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
    name: 'tastingSheet.color',
    label: 'test',
    options: [],
    register: jest.fn()
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
