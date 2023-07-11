import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from 'react-hook-form'

import TastingSheetFormState from '../tasting_sheet/tastingSheetFormState'

type FormRegisterAndErrors = {
  errors: Merge<FieldError, FieldErrorsImpl<TastingSheetFormState>> | undefined
  register: UseFormRegister<TastingSheetFormState>
}

export default FormRegisterAndErrors
