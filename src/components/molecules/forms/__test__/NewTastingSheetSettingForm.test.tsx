import { render } from '@testing-library/react'
import { ReactNode } from 'react'

import { FormRegisterAndErrors } from '../../../../types'
import NewTastingSheetSettingForm from '../NewTastingSheetSettingForm'

jest.mock('../../../templates/TastingSheetFormWrapper', () => ({ children }: { children: ReactNode }) => (
  <>
    <p>TastingSheetFormWrapper</p>
    {children}
  </>
))
jest.mock('../../../atoms/inputs/TastingSheetNameInput', () => () => <p>TastingSheetNameInput</p>)
jest.mock('../../../atoms/selects/TastingSheetTimeSelectBox', () => () => <p>TastingSheetTimeSelectBox</p>)
jest.mock('../../WineColorRadios', () => () => <p>WineColorRadios</p>)

const setUp = ({ register, errors }: FormRegisterAndErrors) => {
  const utils = render(<NewTastingSheetSettingForm register={register} errors={errors} />)

  return {
    ...utils
  }
}

describe('NewTastingSheetSettingForm', () => {
  const props: FormRegisterAndErrors = {
    register: jest.fn(),
    errors: undefined
  }

  test.each([
    ['TastingSheetFormWrapper'],
    ['TastingSheetNameInput'],
    ['TastingSheetTimeSelectBox'],
    ['WineColorRadios']
  ])('%sが表示される', (mockedComponent) => {
    const { getByText } = setUp(props)
    expect(getByText(mockedComponent)).toBeInTheDocument()
  })
})
