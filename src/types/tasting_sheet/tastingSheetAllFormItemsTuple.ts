import AbstractFormItem from './abstractFormItem'
import AppearanceName from './appearance/appearanceName'
import ConclusionName from './conclusion/conclusionName'
import FlavorName from './flavor/flavorName'
import TasteName from './taste/tasteName'

type TastingSheetAllFormItemsTuple = [
  {
    type: 'appearance'
    items: AbstractFormItem<AppearanceName>[]
  },
  {
    type: 'flavor'
    items: AbstractFormItem<FlavorName>[]
  },
  {
    type: 'taste'
    items: AbstractFormItem<TasteName>[]
  },
  {
    type: 'conclusion'
    items: AbstractFormItem<ConclusionName>[]
  }
]

export default TastingSheetAllFormItemsTuple
