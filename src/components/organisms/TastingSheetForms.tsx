import { FC, memo } from 'react'
import { FormItemsProps } from '../../types'
import { ConclusionSelectBoxes, PolymorphicForm } from '../molecules'

const TastingSheetForms: FC<FormItemsProps> = memo(({ formItems }) => (
  <>
    {formItems.map(({ type, items, options }) =>
      options && type === 'conclusion' ? (
        <PolymorphicForm key={type} type={type} items={items}>
          <ConclusionSelectBoxes items={options} />
        </PolymorphicForm>
      ) : (
        <PolymorphicForm key={type} type={type} items={items} />
      )
    )}
  </>
))

export default TastingSheetForms
