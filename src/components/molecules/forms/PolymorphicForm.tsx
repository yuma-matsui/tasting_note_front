import { FC, memo } from 'react'

import { PolymorphicFormProps } from '../../../types'
import { formTitleFormat } from '../../../utils'
import { PolymorphicCheckBox } from '../../atoms'
import BaseForm from './BaseForm'

const PolymorphicForm: FC<PolymorphicFormProps> = memo(({ type, items, children }) => (
  <>
    <h2>{formTitleFormat(type)}</h2>
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
))

export default PolymorphicForm
