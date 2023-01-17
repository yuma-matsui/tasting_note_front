import { FC } from 'react'
import { useGetFormItemsHooks, useTastingSheetForm, useTastingSheetInputsAttributes } from '../../../hooks'

import { TastingSheetBaseFormProps } from '../../../types'
import { convertToFormName } from '../../../utils'
import { TastingSheetCheckBox, TastingSheetFormSubmitButton } from '../../atoms'
import { TastingSheetFormWrapper } from '../../templates'
import ConclusionSelectBoxes from '../ConclusionSelectBoxes'

const TastingSheetBaseForm: FC<TastingSheetBaseFormProps> = ({ type }) => {
  const getItemsHooks = useGetFormItemsHooks(type)
  const items = getItemsHooks()
  const { handleSubmit, onSubmit, lessThanTwoItems, isValid, isSubmitting, getValues, register } = useTastingSheetForm()
  const { isDisabled } = useTastingSheetInputsAttributes()

  return (
    <TastingSheetFormWrapper title={type}>
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
                  value={label}
                  name={convertToFormName(name)}
                  disabled={isDisabled(getValues(convertToFormName(name)), label)}
                  register={register}
                />
              ))}
            </div>
            {lessThanTwoItems(name) && (
              <p>
                <span>2つ選択してください</span>
              </p>
            )}
          </div>
        ))}
        {type === 'conclusion' && <ConclusionSelectBoxes register={register} />}
        <TastingSheetFormSubmitButton disabled={!isValid || isSubmitting} />
      </form>
    </TastingSheetFormWrapper>
  )
}

export default TastingSheetBaseForm
