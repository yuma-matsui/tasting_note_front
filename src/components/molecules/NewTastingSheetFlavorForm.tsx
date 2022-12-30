import { FC, memo } from 'react'
import { FLAVOR_ITEMS_RED, FLAVOR_ITEMS_WHITE } from '../../assets'
import { useTastingSheetContext } from '../../hooks'
import { FlavorCheckBox } from '../atoms'
import BaseForm from './shared/BaseForm'

const NewTastingSheetFlavorForm: FC = memo(() => {
  const { tastingSheet } = useTastingSheetContext()
  const items = tastingSheet.color === 'white' ? FLAVOR_ITEMS_WHITE : FLAVOR_ITEMS_RED

  return (
    <>
      <h2>香り</h2>
      <BaseForm>
        {items.map(({ heading, name, labels, subHeading }) => (
          <div key={heading}>
            <h3>
              {heading}
              <br />
              <span>{subHeading}</span>
            </h3>
            <div>
              {labels.map((label) => (
                <FlavorCheckBox key={label} name={name} label={label} />
              ))}
            </div>
          </div>
        ))}
      </BaseForm>
    </>
  )
})

export default NewTastingSheetFlavorForm
