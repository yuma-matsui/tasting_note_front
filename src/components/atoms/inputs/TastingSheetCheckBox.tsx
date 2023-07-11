import { FC, memo } from 'react'

import {
  useGetCheckBoxClassName,
  useGetLabelClassName,
  useGetRadioOrCheckBoxType,
  useTastingSheetForm,
  useTastingSheetInputsAttributes
} from '../../../hooks'
import { TastingSheetCheckBoxProps } from '../../../types'

const TastingSheetCheckBox: FC<TastingSheetCheckBoxProps> = memo(
  ({ id, name, checked, color, disabled = false, label, register, value }) => {
    const { getValues } = useTastingSheetForm()
    const { getValidationMethod, isMultipleInputs } = useTastingSheetInputsAttributes()
    const { type } = useGetRadioOrCheckBoxType(isMultipleInputs(getValues(name)))
    const { className: labelClassName } = useGetLabelClassName(color, checked)
    const { className: inputClassName } = useGetCheckBoxClassName(type, color)

    return (
      <label htmlFor={id} className={labelClassName}>
        <input
          type={type}
          id={id}
          value={value}
          disabled={disabled}
          readOnly
          {...register(name, {
            validate: getValidationMethod(getValues(name))
          })}
          className={inputClassName}
        />
        <span className="label-text ml-2">{label ?? value}</span>
      </label>
    )
  }
)

export default TastingSheetCheckBox
