import { FC } from 'react'
import { useTastingSheetContext } from '../../../hooks'
import { PolymorphicFormProps } from '../../../types'
import { PolymorphicCheckBox } from '../../atoms'
import BaseForm from './BaseForm'

const PolymorphicForm: FC<PolymorphicFormProps> = ({ type, white, red }) => {
  const { tastingSheet } = useTastingSheetContext()
  const items = tastingSheet.color === 'white' ? white : red

  return (
    <>
      <h2>{type}</h2>
      <BaseForm>
        {items.map(({ heading, name, labels, subHeading }) => (
          <div key={heading}>
            <h3>
              {heading}
              {subHeading && <span>{subHeading}</span>}
            </h3>
            <div>
              {labels.map((label) => (
                <PolymorphicCheckBox type={type} key={label} name={name} label={label} />
              ))}
            </div>
          </div>
        ))}
      </BaseForm>
    </>
  )
}

export default PolymorphicForm
