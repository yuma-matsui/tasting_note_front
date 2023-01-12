import { ChangeEvent } from 'react'
import { UseFormRegister } from 'react-hook-form'

import SelectBoxNames from '../tasting_sheet/selectBoxNames'
import TastingSheetSettingFormInputs from '../tasting_sheet/tastingSheetSettingFormInputs'

type BaseSelectBoxProps = {
  label: string
  name: SelectBoxNames
  value: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  options: string[]
  register: UseFormRegister<TastingSheetSettingFormInputs>
}

export default BaseSelectBoxProps
