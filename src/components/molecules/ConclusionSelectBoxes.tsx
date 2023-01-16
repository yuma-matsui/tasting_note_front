import { FC, memo } from 'react'

import { useConclusionFormItems, useTastingSheetForm } from '../../hooks'
import { ConclusionSelectBoxesProps } from '../../types'

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
            <label htmlFor={name}>
              <select
                id={name}
                {...register(`tastingSheet.conclusion.${name}`, {
                  required: true
                })}
              >
                {labels.map((label) => (
                  <option value={label} key={label}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
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
