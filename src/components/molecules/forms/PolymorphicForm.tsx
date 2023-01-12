import { FC, memo } from 'react'

import { PolymorphicFormProps } from '../../../types'
import { formTitleFormat } from '../../../utils'
import { PolymorphicCheckBox } from '../../atoms'

const PolymorphicForm: FC<PolymorphicFormProps> = memo(({ type, items, children }) => (
  <>
    <h2>{formTitleFormat(type)}</h2>
    <form>
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
    </form>
  </>
))

export default PolymorphicForm
