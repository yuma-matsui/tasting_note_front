import TastingSheetFormItem from './tastingSheetFormItem'

type TastingSheetLabelsTuple = [
  {
    items: TastingSheetFormItem[]
    options: []
    type: 'appearance'
  },
  {
    items: TastingSheetFormItem[]
    options: []
    type: 'flavor'
  },
  {
    items: TastingSheetFormItem[]
    options: []
    type: 'taste'
  },
  {
    items: TastingSheetFormItem[]
    options: TastingSheetFormItem[]
    type: 'conclusion'
  }
]

export default TastingSheetLabelsTuple
