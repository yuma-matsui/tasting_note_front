import { FC, memo } from 'react'
import { useTastingSheetFormItems } from '../../hooks'
import { ConclusionSelectBoxes, PolymorphicForm } from '../molecules'

const TastingSheetForms: FC = memo(() => {
  const { formItems } = useTastingSheetFormItems()

  return (
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
  )
})

export default TastingSheetForms
