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

const setUp = ({ errors, register }: FormRegisterAndErrors) => {
  const utils = render(<NewTastingSheetSettingForm register={register} errors={errors} />)

  return {
    ...utils
  }
}

describe('NewTastingSheetSettingForm', () => {
  const props: FormRegisterAndErrors = {
    errors: undefined,
    register: jest.fn()
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
