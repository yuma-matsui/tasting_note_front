import { CONCLUSION_FORM_ITEMS, CONCLUSION_SELECT_OPTIONS } from '../../../assets'
import { FormItem } from '../../../utils'
import useTastingSheetContext from '../useTastingSheetContext'

const useConclusionFormItems = (type?: 'select' | undefined) => {
  const {
    tastingSheet: { color }
  } = useTastingSheetContext()

  const items = type === 'select' ? CONCLUSION_SELECT_OPTIONS : CONCLUSION_FORM_ITEMS

  const conclusionItems = [...items.map((item) => new FormItem({ color, ...item }).property)]

  return { conclusionItems }
}

export default useConclusionFormItems
