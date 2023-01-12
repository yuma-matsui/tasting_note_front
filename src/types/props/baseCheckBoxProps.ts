import { ChangeEvent } from 'react'
import { UseFormRegister } from 'react-hook-form'

import CheckBoxNames from '../tasting_sheet/checkBoxNames'
import TastingSheetFormInputs from '../tasting_sheet/tastingSheetFormInputs'

type BaseCheckBoxProps = {
  type: string
  id: string
  label: string
  name: CheckBoxNames
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  checked: boolean
  disabled?: boolean
  text?: string
  register: UseFormRegister<TastingSheetFormInputs>
}

export default BaseCheckBoxProps
