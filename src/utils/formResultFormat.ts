import { TastingSheetPropertyType } from '../types'

const formResultFormat = (target: TastingSheetPropertyType) => {
  if (target instanceof Array) return target.join('、')
  return target
}

export default formResultFormat
