import TastingSheetAllName from './tastingSheetAllName'

type TastingSheetFormItem = {
  name: TastingSheetAllName
  heading: string
  labels: string[]
  subHeading?: string | undefined
}

export default TastingSheetFormItem
