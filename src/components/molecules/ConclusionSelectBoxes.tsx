import { FC, memo } from 'react'

import { useConclusionFormItems, useTastingSheetForm } from '../../hooks'
import { ConclusionSelectBoxesProps } from '../../types'
import { TastingSheetSelectBox } from '../atoms'

const ConclusionSelectBoxes: FC<ConclusionSelectBoxesProps> = memo(({ register }) => {
  const options = useConclusionFormItems('select')
  const {
    errors: { tastingSheet: errors }
  } = useTastingSheetForm()

  return (
    <>
      {options.map(({ heading, name, labels }) => (
        <div key={heading}>
          <h3>{heading}</h3>
          <div>
            <TastingSheetSelectBox
              id={name}
              register={register}
              name={`tastingSheet.conclusion.${name}`}
              options={labels}
            />
          </div>
          {errors?.conclusion && errors.conclusion[name] && (
            <p>
              <span>{errors.conclusion[name]?.message}</span>
            </p>
          )}
        </div>
      ))}
    </>
  )
})

export default ConclusionSelectBoxes
