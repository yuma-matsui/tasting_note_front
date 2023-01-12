import useAppearanceFormItems from '../../../hooks/tasting_sheet/appearance/useAppearanceFormItems'
import PolymorphicForm from './PolymorphicForm'

const AppearanceForm = () => {
  const items = useAppearanceFormItems()

  return <PolymorphicForm type="appearance" items={items} />
}

export default AppearanceForm
