import { useAppearanceFormItems } from '../../../hooks'
import PolymorphicForm from './PolymorphicForm'

const AppearanceForm = () => {
  const items = useAppearanceFormItems()

  return <PolymorphicForm type="appearance" items={items} />
}

export default AppearanceForm
