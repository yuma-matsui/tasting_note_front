import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from 'react-hook-form'

import TastingSheetFormState from '../tasting_sheet/tastingSheetFormState'

type FormRegisterAndErrors = {
  register: UseFormRegister<TastingSheetFormState>
  errors: Merge<FieldError, FieldErrorsImpl<TastingSheetFormState>> | undefined
}

export default FormRegisterAndErrors
