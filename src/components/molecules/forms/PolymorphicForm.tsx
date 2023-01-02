import { FC, memo } from 'react'
import { useTastingSheetContext } from '../../../hooks'
import { PolymorphicFormProps } from '../../../types'
import { PolymorphicCheckBox } from '../../atoms'
import BaseForm from './BaseForm'

const PolymorphicForm: FC<PolymorphicFormProps> = memo(({ type, white, red, children }) => {
  const {
    tastingSheet: { color }
  } = useTastingSheetContext()
  const items = color === 'white' ? white : red

  return (
    <>
      <h2>{type}</h2>
      <BaseForm>
        <>
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
          {children}
        </>
      </BaseForm>
    </>
  )
})

export default PolymorphicForm
