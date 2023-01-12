import { useConclusionFormItems } from '../../../hooks'
import ConclusionSelectBoxes from '../ConclusionSelectBoxes'
import PolymorphicForm from './PolymorphicForm'

const ConclusionForm = () => {
  const labels = useConclusionFormItems()
  const options = useConclusionFormItems('select')

  return (
    <PolymorphicForm type="conclusion" items={labels}>
      <ConclusionSelectBoxes items={options} />
    </PolymorphicForm>
  )
}

export default ConclusionForm
