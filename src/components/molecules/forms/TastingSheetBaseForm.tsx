import { FC, memo } from 'react'

import { useGetIsMultipleInputs, useTastingSheetInputsAttributes } from '../../../hooks'
import { TastingSheetBaseFormProps } from '../../../types'
import { convertToFormName } from '../../../utils'
import { TastingSheetCheckBox } from '../../atoms'
import { TastingSheetFormWrapper } from '../../templates'
import ConclusionSelectBoxes from '../ConclusionSelectBoxes'

const TastingSheetBaseForm: FC<TastingSheetBaseFormProps> = memo(({ type, items, options, register, getValues }) => {
  const { isDisabled } = useTastingSheetInputsAttributes()
  const { isMultipleInputs } = useGetIsMultipleInputs()

  return (
    <TastingSheetFormWrapper title={type}>
      <div className="w-full mt-4 mb-6 border-black border-2">
        {items.map(({ heading, name, labels, subHeading }) => (
          <div key={heading}>
            <h3 className="form-heading-text">
              {heading}
              {subHeading && <span className="form-subheading-text">{subHeading}</span>}
              {isMultipleInputs(name) && (
                <span className="text-theme-red text-sm font-normal block py-1">2つ選択してください</span>
              )}
            </h3>
            <div className="flex flex-wrap p-2">
              {labels.map((label) => (
                <TastingSheetCheckBox
                  key={label}
                  id={`${name}[${label}]`}
                  value={label}
                  name={convertToFormName(name)}
                  disabled={isDisabled(getValues(convertToFormName(name)), label)}
                  register={register}
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
