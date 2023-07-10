import { render, screen } from '@testing-library/react'

import TastingSheetCheckBox from '../TastingSheetCheckBox'
import { TastingSheetCheckBoxProps } from '../../../../types'

const mockType = 'text'
jest.mock('../../../../hooks/tasting_sheet/useGetRadioOrCheckBoxType', () => () => ({
  type: mockType
}))

jest.mock('../../../../hooks/tasting_sheet/useTastingSheetInputAttributes', () => () => ({
  getValidationMethod: jest.fn(),
  isMultipleInputs: jest.fn()
}))

const mockClassName = 'mock-class'
jest.mock('../../../../hooks/tasting_sheet/useGetCheckBoxClassName', () => () => ({
  className: mockClassName
}))
jest.mock('../../../../hooks/useGetLabelClassName', () => () => ({
  className: mockClassName
}))

jest.mock('../../../../hooks/tasting_sheet/useTastingSheetForm', () => () => ({
  getValues: jest.fn()
}))

const setUp = ({ id, name, checked, color, disabled = false, label, register, value }: TastingSheetCheckBoxProps) => {
  const utils = render(
    <TastingSheetCheckBox
      id={id}
      name={name}
      value={value}
      register={register}
      label={label}
      disabled={disabled}
      color={color}
      checked={checked ?? false}
    />
  )

  return {
    ...utils,
    input: screen.getByLabelText(label ?? value)
  }
}

describe('TastingSheetCheckBox', () => {
  let params: TastingSheetCheckBoxProps
  const initialParams: TastingSheetCheckBoxProps = {
    id: 'test-id',
    name: 'tastingSheet.color',
    checked: false,
    color: 'red',
    label: 'test-label',
    register: jest.fn(),
    value: 'test-value'
  }

  beforeEach(() => {
    params = initialParams
  })

  it('useGetCheckBoxClassNameで返された値をclassNameにもつ', () => {
    const { input } = setUp(params)
    expect(input).toHaveClass(mockClassName)
  })

  it('useGetLabelClassNameで返された値をclassNameにもつ', () => {
    const { input } = setUp(params)
    expect(input.parentElement?.className.includes(mockClassName)).toBeTruthy()
  })

  describe('label', () => {
    it('labelが存在する場合はlabelが表示される', () => {
      const { getByText } = setUp(params)
      expect(getByText('test-label')).toBeInTheDocument()
    })

    it('labelが存在しない場合はvalueが表示される', () => {
      params.label = undefined
      const { getByText } = setUp(params)
      expect(getByText(params.value)).toBeInTheDocument()
    })
  })

  it('レンダリング時にregisterが実行される', () => {
    setUp(params)
    expect(params.register).toHaveBeenCalled()
  })

  it('useGetRadioOrCheckBoxTypeで帰ってきた値をtypeにもつ', () => {
    const { input } = setUp(params)
    expect(input).toHaveAttribute('type', mockType)
  })
})
