import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from 'react-hook-form'

import TastingSheetFormState from '../tasting_sheet/tastingSheetFormState'

type TastingSheetSettingFormProps = {
  register: UseFormRegister<TastingSheetFormState>
  errors: Merge<FieldError, FieldErrorsImpl<TastingSheetFormState>> | undefined
}

export default TastingSheetSettingFormProps
