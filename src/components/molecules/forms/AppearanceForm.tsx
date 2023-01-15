import { FC, memo } from 'react'

import { useAppearanceFormItems, useTastingSheetForm, useTastingSheetInputsAttributes } from '../../../hooks'
import { TastingSheetFormWrapper } from '../../templates'

const AppearanceForm: FC = memo(() => {
  const items = useAppearanceFormItems()
  const {
    handleSubmit,
    onSubmit,
    errors: { tastingSheet: errors },
    isValid,
    isSubmitting,
    register,
    getValues
  } = useTastingSheetForm()
  const { isMultipleInputs, isDisabled, getValidationMethod } = useTastingSheetInputsAttributes()

  return (
    <TastingSheetFormWrapper title="appearance">
      <form onSubmit={handleSubmit(onSubmit)}>
        {items.map(({ heading, name, labels, subHeading }) => (
          <div key={heading}>
            <h3>
              {heading}
              {subHeading && <span>{subHeading}</span>}
            </h3>
            <div>
              {labels.map((label) => (
                <label key={label} htmlFor={`${name}[${label}]`}>
                  <input
                    type={isMultipleInputs(getValues(`tastingSheet.appearance.${name}`)) ? 'checkbox' : 'radio'}
                    id={`${name}[${label}]`}
                    value={label}
                    disabled={isDisabled(getValues(`tastingSheet.appearance.${name}`), label)}
                    {...register(`tastingSheet.appearance.${name}`, {
                      validate: getValidationMethod(getValues(`tastingSheet.appearance.${name}`))
                    })}
                  />
                  {label}
                </label>
              ))}
            </div>
            <p>{errors?.appearance && errors.appearance[name] && errors.appearance[name]?.message}</p>
          </div>
        ))}
        <input type="submit" value="次へ" className="btn" disabled={!isValid || isSubmitting} />
      </form>
    </TastingSheetFormWrapper>
  )
})

export default AppearanceForm
