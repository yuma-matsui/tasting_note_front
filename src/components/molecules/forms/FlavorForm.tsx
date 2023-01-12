import useFlavorFormItems from '../../../hooks/tasting_sheet/flavor/useFlavorFormItems'
import PolymorphicForm from './PolymorphicForm'

const FlavorForm = () => {
  const items = useFlavorFormItems()

  return <PolymorphicForm type="flavor" items={items} />
}

export default FlavorForm
