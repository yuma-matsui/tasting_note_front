import { render } from '@testing-library/react'

import TastingSheetTimeSelectBox from '../TastingSheetTimeSelectBox'
import { TastingSheetSelectBoxProps } from '../../../../types'

const setUp = ({ id, name, label, options, register }: TastingSheetSelectBoxProps) => {
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
