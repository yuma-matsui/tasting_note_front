import { FC, memo } from 'react'

import { useFlavorFormItems, useTastingSheetForm, useTastingSheetInputsAttributes } from '../../../hooks'
import { TastingSheetCheckBox, TastingSheetFormSubmitButton } from '../../atoms'
import { TastingSheetFormWrapper } from '../../templates'

const FlavorForm: FC = memo(() => {
  const items = useFlavorFormItems()
  const {
    handleSubmit,
    onSubmit,
    errors: { tastingSheet: errors },
    isValid,
    isSubmitting,
    getValues,
    register
  } = useTastingSheetForm()
  const { isDisabled } = useTastingSheetInputsAttributes()

  return (
    <TastingSheetFormWrapper title="flavor">
      <form onSubmit={handleSubmit(onSubmit)}>
        {items.map(({ heading, name, labels, subHeading }) => (
          <div key={heading}>
            <h3>
              {heading}
              {subHeading && <span>{subHeading}</span>}
            </h3>
            <div>
              {labels.map((label) => (
                <TastingSheetCheckBox
                  key={label}
                  id={`${name}[${label}]`}
                  name={`tastingSheet.flavor.${name}`}
                  value={label}
                  disabled={isDisabled(getValues(`tastingSheet.flavor.${name}`), label)}
                  register={register}
                />
              ))}
            </div>
            {errors?.flavor && errors.flavor[name] && (
              <p>
                <span>{errors.flavor[name]?.message}</span>
              </p>
            )}
          </div>
        ))}
        <TastingSheetFormSubmitButton disabled={!isValid || isSubmitting} />
      </form>
    </TastingSheetFormWrapper>
  )
})

export default FlavorForm
