import { FC, memo } from 'react'

import { useTastingSheetForm, useTastingSheetInputsAttributes } from '../../../hooks'
import { TastingSheetCheckBoxProps } from '../../../types'

const TastingSheetCheckBox: FC<TastingSheetCheckBoxProps> = memo(({ id, name, value, register }) => {
  const { getValues } = useTastingSheetForm()
  const { isMultipleInputs, isDisabled, getValidationMethod } = useTastingSheetInputsAttributes()

  return (
    <label htmlFor={id}>
      <input
        type={isMultipleInputs(getValues(name)) ? 'checkbox' : 'radio'}
        id={id}
        value={value}
        disabled={isDisabled(getValues(name), value)}
        {...register(name, {
          validate: getValidationMethod(getValues(name))
        })}
      />
      {value}
    </label>
  )
})

export default TastingSheetCheckBox
