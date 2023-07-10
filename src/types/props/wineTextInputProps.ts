import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from 'react-hook-form'

import WineFormState from '../wine/wineFormState'
import WineUseFormName from '../wine/wineUseFormName'

type WineTextInputProps = {
  name: WineUseFormName
  errors?: Merge<FieldError, FieldErrorsImpl<WineFormState>> | undefined
  label: string
  register: UseFormRegister<WineFormState>
  required: boolean
}

export default WineTextInputProps
