import { render } from '@testing-library/react'
import { ReactNode } from 'react'

import { useGetIsMultipleInputs } from '../../../../hooks'
import { TastingSheetBaseFormProps } from '../../../../types'
import TastingSheetBaseForm from '../TastingSheetBaseForm'

jest.mock('../../../../hooks/tasting_sheet/useGetIsMultipleInputs')
jest.mock('../../../../hooks/tasting_sheet/useTastingSheetInputAttributes', () => () => ({
  isChecked: jest.fn(),
  isDisabled: jest.fn()
}))

jest.mock('../../../templates/TastingSheetFormWrapper', () => ({ children }: { children: ReactNode }) => (
  <>
    <p>TastingSheetFormWrapper</p>
    {children}
  </>
))
jest.mock('../../../atoms/inputs/TastingSheetCheckBox', () => () => <p>TastingSheetCheckBox</p>)
jest.mock('../../ConclusionSelectBoxes', () => () => <p>ConclusionSelectBoxes</p>)

const setUp = ({ getValues, items, options, register, type }: TastingSheetBaseFormProps) => {
  const utils = render(
    <TastingSheetBaseForm type={type} items={items} options={options} register={register} getValues={getValues} />
  )

  return {
    ...utils
  }
}

describe('TastingSheetBaseForm', () => {
  let props: TastingSheetBaseFormProps
  const initialProps: TastingSheetBaseFormProps = {
    getValues: jest.fn(),
    items: [
      {
        name: 'appearanceColors',
        heading: 'item1',
        labels: ['label1', 'label2']
      },
      {
        name: 'afterTaste',
        heading: 'item2',
        labels: ['label3', 'label4'],
        subHeading: 'item2-subHeading'
      }
    ],
    options: [],
    register: jest.fn(),
    type: 'appearance'
  }

  beforeEach(() => {
    props = { ...initialProps }
    ;(useGetIsMultipleInputs as jest.Mock).mockImplementation(() => ({
      isMultipleInputs: jest.fn(() => false)
    }))
  })

  test('TastingSheetFormWrapperが表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText('TastingSheetFormWrapper')).toBeInTheDocument()
  })

  test('itemsの要素数だけheadingが表示される', () => {
    const { queryAllByRole } = setUp(props)
    expect(queryAllByRole('heading').length).toEqual(props.items.length)
  })

  test('itemsの要素がもつheadingが表示される', () => {
    const { getByText } = setUp(props)

    props.items.map(({ heading }) => expect(getByText(heading)).toBeInTheDocument())
  })

  test('itemsの要素がsubHeadingを持つ場合はsubHeadingが表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText('item2-subHeading')).toBeInTheDocument()
  })

  describe('useGetIsMultipleInputs', () => {
    test('isMultipleInputsがfalseの場合、"2つ選択してください"が表示されない', () => {
      const { queryByText } = setUp(props)
      expect(queryByText('2つ選択してください')).not.toBeInTheDocument()
    })

    test('isMultipleInputsがtrueの場合、"2つ選択してください"が表示される', () => {
      ;(useGetIsMultipleInputs as jest.Mock).mockImplementation(() => ({
        isMultipleInputs: jest.fn(() => true)
      }))

      const { getAllByText } = setUp(props)
      expect(getAllByText('2つ選択してください').length).toEqual(2)
    })
  })

  test('itemsの要素が持つlabelsの数だけTastingSheetCheckBoxが表示される', () => {
    const { getAllByText } = setUp(props)
    expect(getAllByText('TastingSheetCheckBox').length).toEqual(4)
  })

  test('typeがconclusionの場合、ConclusionSelectBoxesが表示される', () => {
    const { queryByText } = setUp(props)
    expect(queryByText('ConclusionSelectBoxes')).not.toBeInTheDocument()
  })

  test('typeがconclusionの場合、ConclusionSelectBoxesが表示される', () => {
    props.type = 'conclusion'
    const { getByText } = setUp(props)
    expect(getByText('ConclusionSelectBoxes')).toBeInTheDocument()
  })
})
