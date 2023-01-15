import { FC, memo } from 'react'

import { useAppearanceFormItems, useTastingSheetForm } from '../../../hooks'
import { TastingSheetCheckBox } from '../../atoms'
import { TastingSheetFormWrapper } from '../../templates'

const AppearanceForm: FC = memo(() => {
  const items = useAppearanceFormItems()
  const {
    handleSubmit,
    onSubmit,
    errors: { tastingSheet: errors },
    isValid,
    isSubmitting,
    register
  } = useTastingSheetForm()

  return (
    <TastingSheetFormWrapper title="appearance">
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
                  name={`tastingSheet.appearance.${name}`}
                  value={label}
                  register={register}
                />
              ))}
            </div>
            <p>{errors?.appearance && errors.appearance[name] && errors.appearance[name]?.message}</p>
          </div>
        ))}
        <input type="submit" value="次へ" className="btn" disabled={!isValid || isSubmitting} />
      </form>
    </TastingSheetFormWrapper>
  )
})

export default AppearanceForm
