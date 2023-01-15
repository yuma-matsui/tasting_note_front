import { FC, memo } from 'react'

import { useFlavorFormItems, useTastingSheetForm, useTastingSheetInputsAttributes } from '../../../hooks'

const FlavorForm: FC = memo(() => {
  const items = useFlavorFormItems()
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
    <>
      <h2>香り</h2>
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
                    type={isMultipleInputs(getValues(`tastingSheet.flavor.${name}`)) ? 'checkbox' : 'radio'}
                    id={`${name}[${label}]`}
                    value={label}
                    disabled={isDisabled(getValues(`tastingSheet.flavor.${name}`), label)}
                    {...register(`tastingSheet.flavor.${name}`, {
                      validate: getValidationMethod(getValues(`tastingSheet.flavor.${name}`))
                    })}
                  />
                  {label}
                </label>
              ))}
            </div>
            <p>{errors?.flavor && errors.flavor[name] && errors.flavor[name]?.message}</p>
          </div>
        ))}
        <input type="submit" value="次へ" className="btn" disabled={!isValid || isSubmitting} />
      </form>
    </>
  )
})

export default FlavorForm
