import { FC, memo } from 'react'

import {
  useGetCheckBoxClassName,
  useGetRadioOrCheckBoxType,
  useTastingSheetForm,
  useTastingSheetInputsAttributes
} from '../../../hooks'
import { TastingSheetCheckBoxProps } from '../../../types'

const TastingSheetCheckBox: FC<TastingSheetCheckBoxProps> = memo(
  ({ id, name, value, disabled = false, register, label, color }) => {
    const { getValues } = useTastingSheetForm()
    const { isMultipleInputs, getValidationMethod } = useTastingSheetInputsAttributes()
    const { type } = useGetRadioOrCheckBoxType(isMultipleInputs(getValues(name)))
    const { className } = useGetCheckBoxClassName(type, color)

    return (
      <label htmlFor={id} className="label cursor-pointer">
        <input
          type={type}
          id={id}
          value={value}
          disabled={disabled}
          readOnly
          {...register(name, {
            validate: getValidationMethod(getValues(name))
          })}
          className={className}
        />
        <span className="label-text ml-2">{label ?? value}</span>
      </label>
    )
  }
)

export default TastingSheetCheckBox
