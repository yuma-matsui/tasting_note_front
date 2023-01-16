import { FC, memo } from 'react'

import { useTastingSheetForm, useTastingSheetInputsAttributes } from '../../../hooks'
import { TastingSheetCheckBoxProps } from '../../../types'

const TastingSheetCheckBox: FC<TastingSheetCheckBoxProps> = memo(
  ({ id, name, value, disabled = false, register, label }) => {
    const { getValues } = useTastingSheetForm()
    const { isMultipleInputs, getValidationMethod } = useTastingSheetInputsAttributes()

    return (
      <label htmlFor={id}>
        <input
          type={isMultipleInputs(getValues(name)) ? 'checkbox' : 'radio'}
          id={id}
          value={value}
          disabled={disabled}
          {...register(name, {
            validate: getValidationMethod(getValues(name))
          })}
        />
        {label ?? value}
      </label>
    )
  }
)

export default TastingSheetCheckBox
