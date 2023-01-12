import { useFlavorFormItems } from '../../../hooks'
import PolymorphicForm from './PolymorphicForm'

const FlavorForm = () => {
  const items = useFlavorFormItems()

  return <PolymorphicForm type="flavor" items={items} />
}

export default FlavorForm
