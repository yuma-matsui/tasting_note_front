import { ChangeEvent } from 'react'
import { UseFormRegister } from 'react-hook-form'

import CheckBoxNames from '../tasting_sheet/checkBoxNames'
import TastingSheetSettingFormInputs from '../tasting_sheet/tastingSheetSettingFormInputs'

type BaseCheckBoxProps = {
  type: string
  id: string
  label: string
  name: CheckBoxNames
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  checked: boolean
  disabled?: boolean
  text?: string
  register: UseFormRegister<TastingSheetSettingFormInputs>
}

export default BaseCheckBoxProps
