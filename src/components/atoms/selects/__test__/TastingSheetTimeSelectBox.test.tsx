import { render } from '@testing-library/react'

import TastingSheetTimeSelectBox from '../TastingSheetTimeSelectBox'
import { TastingSheetSelectBoxProps } from '../../../../types'

const setUp = ({ id, register, name, options, label }: TastingSheetSelectBoxProps) => {
  const utils = render(
    <TastingSheetTimeSelectBox id={id} register={register} name={name} options={options} label={label} />
  )

  return {
    ...utils
  }
}

describe('TastingSheetTimeSelectBox', () => {
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
