import { CONCLUSION_FORM_ITEMS } from '../../../assets'
import { FormItem } from '../../../utils'
import useTastingSheetContext from '../useTastingSheetContext'

const useConclusionFormItems = () => {
  const {
    tastingSheet: { color }
  } = useTastingSheetContext()

  const conclusionItems = [...CONCLUSION_FORM_ITEMS.map((item) => new FormItem({ color, ...item }).property)]

  return { conclusionItems }
}

export default useConclusionFormItems
