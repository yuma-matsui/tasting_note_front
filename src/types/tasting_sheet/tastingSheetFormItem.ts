import TastingSheetAllName from './tastingSheetAllName'

type TastingSheetFormItem = {
  heading: string
  name: TastingSheetAllName
  labels: string[]
  subHeading?: string | undefined
}

export default TastingSheetFormItem
