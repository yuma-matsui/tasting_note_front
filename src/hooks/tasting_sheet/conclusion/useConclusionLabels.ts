import { CONCLUSION_FORM_ITEMS, CONCLUSION_SELECT_OPTIONS } from '../../../assets'
import { ConclusionName } from '../../../types'
import { FormItem } from '../../../utils'
import useTastingSheetContext from '../../context/useTastingSheetContext'

const useConclusionLabels = (type?: 'select' | undefined) => {
  const {
    tastingSheet: { color }
  } = useTastingSheetContext()

  const items = type === 'select' ? CONCLUSION_SELECT_OPTIONS : CONCLUSION_FORM_ITEMS

  return [...items.map((item) => new FormItem<ConclusionName>({ color, ...item }).property)]
}

export default useConclusionLabels
