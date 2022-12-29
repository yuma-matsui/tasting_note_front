import { memo } from 'react'

import { APPEARANCE_ITEMS_RED, APPEARANCE_ITEMS_WHITE } from '../../assets'
import { useTastingSheetContext } from '../../hooks'
import { TastingSheetAppearanceCheckBox } from '../atoms'
import BaseForm from './shared/BaseForm'

const NewTastingSheetAppearanceForm = memo(() => {
  const { tastingSheet } = useTastingSheetContext()
  const items = tastingSheet.color === 'white' ? APPEARANCE_ITEMS_WHITE : APPEARANCE_ITEMS_RED

  return (
    <>
      <h2>外観</h2>
      <BaseForm>
        {items.map(({ heading, name, labels, subHeading }) => (
          <div key={heading}>
            <h3>
              {heading}
              {subHeading && <span>{subHeading}</span>}
            </h3>
            <div>
              {labels.map((label) => (
                <TastingSheetAppearanceCheckBox key={label} name={name} label={label} />
              ))}
            </div>
          </div>
        ))}
      </BaseForm>
    </>
  )
})

export default NewTastingSheetAppearanceForm
