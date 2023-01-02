import { memo } from 'react'

import { CONCLUSION_ITEMS_RED, CONCLUSION_ITEMS_WHITE } from '../../../assets'
import ConclusionSelectBoxes from '../ConclusionSelectBoxes'
import PolymorphicForm from './PolymorphicForm'

const ConclusionForm = memo(() => (
  <PolymorphicForm type="まとめ" white={CONCLUSION_ITEMS_WHITE} red={CONCLUSION_ITEMS_RED}>
    <ConclusionSelectBoxes />
  </PolymorphicForm>
))

export default ConclusionForm
