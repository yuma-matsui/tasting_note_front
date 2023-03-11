import TastingSheetFormItem from './tastingSheetFormItem'

type TastingSheetLabelsTuple = [
  {
    type: 'appearance'
    items: TastingSheetFormItem[]
    options: []
  },
  {
    type: 'flavor'
    items: TastingSheetFormItem[]
    options: []
  },
  {
    type: 'taste'
    items: TastingSheetFormItem[]
    options: []
  },
  {
    type: 'conclusion'
    items: TastingSheetFormItem[]
    options: TastingSheetFormItem[]
  }
]

export default TastingSheetLabelsTuple
