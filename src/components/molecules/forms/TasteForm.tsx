import useTasteFormItems from '../../../hooks/tasting_sheet/taste/useTasteFormItems'
import PolymorphicForm from './PolymorphicForm'

const TasteForm = () => {
  const items = useTasteFormItems()

  return <PolymorphicForm type="taste" items={items} />
}

export default TasteForm
