import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'

import TastingSheetFormState from '../tasting_sheet/tastingSheetFormState'

type TastingSheetSettingFormProps = {
  register: UseFormRegister<TastingSheetFormState>
  errors: Partial<FieldErrorsImpl<TastingSheetFormState>>
}

export default TastingSheetSettingFormProps
