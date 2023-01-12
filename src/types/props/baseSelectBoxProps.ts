import { ChangeEvent } from 'react'
import { UseFormRegister } from 'react-hook-form'
import SelectBoxNames from '../tasting_sheet/selectBoxNames'

import TastingSheetFormInputs from '../tasting_sheet/tastingSheetFormInputs'

type BaseSelectBoxProps = {
  label: string
  name: SelectBoxNames
  value: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  options: string[]
  register: UseFormRegister<TastingSheetFormInputs>
}

export default BaseSelectBoxProps
