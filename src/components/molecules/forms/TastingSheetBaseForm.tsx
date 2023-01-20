import { FC } from 'react'

import { useTastingSheetInputsAttributes } from '../../../hooks'
import { TastingSheetBaseFormProps } from '../../../types'
import { convertToFormName } from '../../../utils'
import { TastingSheetCheckBox } from '../../atoms'
import { TastingSheetFormWrapper } from '../../templates'
import ConclusionSelectBoxes from '../ConclusionSelectBoxes'

const TastingSheetBaseForm: FC<TastingSheetBaseFormProps> = ({
  type,
  items,
  options,
  register,
  lessThanTwoItems,
  getValues
}) => {
  const { isDisabled } = useTastingSheetInputsAttributes()

  return (
    <TastingSheetFormWrapper title={type}>
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
      {type === 'conclusion' && <ConclusionSelectBoxes register={register} options={options} />}
    </TastingSheetFormWrapper>
  )
}

export default TastingSheetBaseForm
