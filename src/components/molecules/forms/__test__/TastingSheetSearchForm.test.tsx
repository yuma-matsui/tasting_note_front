import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { useTastingSheetSearchForm as mockUserTastingSheetSearchForm } from '../../../../hooks'
import { TastingSheetSearchFormProps } from '../../../../types'
import TastingSheetSearchForm from '../TastingSheetSearchForm'

jest.mock('../../../../hooks/tasting_sheet/useTastingSheetSearchForm')

jest.mock('../../SearchColorRadios', () => () => <p>SearchColorRadios</p>)

jest.mock('../../../atoms/selects/SearchSelectBox', () => () => <p>SearchSelectBox</p>)

const setUp = ({ setFilter }: TastingSheetSearchFormProps) => {
  const utils = render(<TastingSheetSearchForm setFilter={setFilter} />)

  return {
    ...utils,
    button: screen.getByRole('button')
  }
}

describe('TastingSheetSearchForm', () => {
  const props: TastingSheetSearchFormProps = {
    setFilter: jest.fn()
  }

  const useSearchFormReturnValue = {
    onSubmit: jest.fn(),
    color: 'test',
    onChangeColor: jest.fn(),
    country: 'test',
    onChangeCountry: jest.fn(),
    grape: 'test',
    onChangeGrape: jest.fn(),
    grapeOptions: [],
    countries: [],
    onClickAllClear: jest.fn()
  }

  beforeEach(() => {
    ;(mockUserTastingSheetSearchForm as jest.Mock).mockImplementation(() => useSearchFormReturnValue)
  })

  test('SearchColorRadiosが表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText('SearchColorRadios')).toBeInTheDocument()
  })

  test('SearchSelectBoxが2つ表示される', () => {
    const { getAllByText } = setUp(props)
    expect(getAllByText('SearchSelectBox').length).toEqual(2)
  })

  test('クリアボタンが表示される', () => {
    const { queryByRole } = setUp(props)
    expect(queryByRole('button', { name: 'クリア' })).toBeInTheDocument()
  })

  test('ボタンがクリックされるとonClickAllClearが実行される', () => {
    const { button } = setUp(props)
    userEvent.click(button)

    expect(useSearchFormReturnValue.onClickAllClear).toHaveBeenCalled()
  })
})
