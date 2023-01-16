import { FC, memo, useEffect } from 'react'

import {
  useTasteFormItems,
  useTastingSheetContext,
  useTastingSheetForm,
  useTastingSheetInputsAttributes
} from '../../../hooks'
import { TastingSheetCheckBox, TastingSheetFormSubmitButton } from '../../atoms'
import { TastingSheetFormWrapper } from '../../templates'

const TasteForm: FC = memo(() => {
  const items = useTasteFormItems()
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

  const { tastingSheet } = useTastingSheetContext()

  useEffect(() => {
    console.log(tastingSheet)
  }, [tastingSheet])

  return (
    <TastingSheetFormWrapper title="taste">
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
                  name={`tastingSheet.taste.${name}`}
                  value={label}
                  disabled={isDisabled(getValues(`tastingSheet.taste.${name}`), label)}
                  register={register}
                />
              ))}
            </div>
            {errors?.taste && errors.taste[name] && (
              <p>
                <span>{errors.taste[name]?.message}</span>
              </p>
            )}
          </div>
        ))}
        <TastingSheetFormSubmitButton disabled={!isValid || isSubmitting} />
      </form>
    </TastingSheetFormWrapper>
  )
})

export default TasteForm
