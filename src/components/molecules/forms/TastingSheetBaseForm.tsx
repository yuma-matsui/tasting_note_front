import { FC, memo } from 'react'

import { useGetIsMultipleInputs, useTastingSheetInputsAttributes } from '../../../hooks'
import { TastingSheetBaseFormProps } from '../../../types'
import { convertToFormName } from '../../../utils'
import { TastingSheetCheckBox } from '../../atoms'
import { TastingSheetFormWrapper } from '../../templates'
import ConclusionSelectBoxes from '../ConclusionSelectBoxes'

const TastingSheetBaseForm: FC<TastingSheetBaseFormProps> = memo(({ getValues, items, options, register, type }) => {
  const { isChecked, isDisabled } = useTastingSheetInputsAttributes()
  const { isMultipleInputs } = useGetIsMultipleInputs()

  return (
    <TastingSheetFormWrapper title={type}>
      <div className="w-full mt-4">
        {items.map(({ name, heading, labels, subHeading }) => (
          <div key={heading} className="form-section-border">
            <h3 className="form-heading-text">
              {heading}
              {subHeading && <span className="form-subheading-text">{subHeading}</span>}
              {isMultipleInputs(name) && (
                <span className="text-theme-red text-sm font-normal block py-1">2つ選択してください</span>
              )}
            </h3>
            <div className="flex flex-wrap">
              {labels.map((label) => (
                <TastingSheetCheckBox
                  key={label}
                  id={`${name}[${label}]`}
                  value={label}
                  name={convertToFormName(name)}
                  disabled={isDisabled(getValues(convertToFormName(name)), label)}
                  register={register}
                  checked={isChecked(getValues(convertToFormName(name)), label)}
                  color={getValues('tastingSheet.color')}
                />
              ))}
            </div>
          </div>
        ))}
        {type === 'conclusion' && <ConclusionSelectBoxes register={register} options={options} />}
      </div>
    </TastingSheetFormWrapper>
  )
})

export default TastingSheetBaseForm
