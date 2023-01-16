import { FC, memo } from 'react'

import { useConclusionFormItems, useTastingSheetForm, useTastingSheetInputsAttributes } from '../../../hooks'
import { TastingSheetCheckBox, TastingSheetFormSubmitButton } from '../../atoms'
import { TastingSheetFormWrapper } from '../../templates'
import ConclusionSelectBoxes from '../ConclusionSelectBoxes'

const ConclusionForm: FC = memo(() => {
  const items = useConclusionFormItems()

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
    <TastingSheetFormWrapper title="conclusion">
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
                  name={`tastingSheet.conclusion.${name}`}
                  value={label}
                  disabled={isDisabled(getValues(`tastingSheet.conclusion.${name}`), label)}
                  register={register}
                />
              ))}
            </div>
            {errors?.conclusion && errors.conclusion[name] && (
              <p>
                <span>{errors.conclusion[name]?.message}</span>
              </p>
            )}
          </div>
        ))}
        <ConclusionSelectBoxes register={register} />
        <TastingSheetFormSubmitButton disabled={!isValid || isSubmitting} />
      </form>
    </TastingSheetFormWrapper>
  )
})

export default ConclusionForm
