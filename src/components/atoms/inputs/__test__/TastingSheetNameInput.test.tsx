import { render } from '@testing-library/react'

import TastingSheetNameInput from '../TastingSheetNameInput'
import { FormRegisterAndErrors } from '../../../../types'

const setUp = ({ errors, register }: FormRegisterAndErrors) => {
  const utils = render(<TastingSheetNameInput register={register} errors={errors} />)

  return {
    ...utils
  }
}

describe('TastingSheetNameInput', () => {
  let props: FormRegisterAndErrors
  const initialProps: FormRegisterAndErrors = {
    errors: undefined,
    register: jest.fn()
  }

  beforeEach(() => {
    props = initialProps
  })

  it('"シート名"が表示される', () => {
    const { getByText } = setUp(props)
    expect(getByText('シート名')).toBeInTheDocument()
  })

  it('registerがrequired trueで実行される', () => {
    setUp(props)
    expect(props.register).toHaveBeenCalledWith('tastingSheet.name', { required: true })
  })

  describe('errors', () => {
    it('errorsが存在する場合に"シート名を入力してください"が表示される', () => {
      props.errors = {}
      const { getByText } = setUp(props)
      expect(getByText('シート名を入力してください')).toBeInTheDocument()
    })

    it('errorsが存在しない場合は何も表示されない', () => {
      const { queryByRole } = setUp(props)
      expect(queryByRole('paragraph')).not.toBeInTheDocument()
    })
  })
})
