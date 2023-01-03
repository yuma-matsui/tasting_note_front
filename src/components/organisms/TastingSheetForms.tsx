import { FC, memo } from 'react'
import { useTastingSheetFormItems } from '../../hooks'
import { ConclusionSelectBoxes, PolymorphicForm } from '../molecules'

const TastingSheetForms: FC = memo(() => {
  const { formItems } = useTastingSheetFormItems()

  return (
    <>
      {formItems.map(({ type, items }) =>
        type !== 'conclusion' ? (
          <PolymorphicForm key={type} type={type} items={items} />
        ) : (
          <PolymorphicForm key={type} type={type} items={items}>
            <ConclusionSelectBoxes />
          </PolymorphicForm>
        )
      )}
    </>
  )
})

export default TastingSheetForms
