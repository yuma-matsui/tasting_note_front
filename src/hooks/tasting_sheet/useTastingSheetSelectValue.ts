import useConclusionSelectValue from './conclusion/useConclusionSelectValue'
import useTastingSheetSelectTimeValue from './useTastingSheetSelectTimeValue'

const useTastingSheetSelectValue = (name: string) => {
  switch (name) {
    case 'time':
      return useTastingSheetSelectTimeValue
    case 'vintage':
    case 'country':
    case 'grape':
      return useConclusionSelectValue
    default:
      throw new Error('不正な呼び出し方です。')
  }
}

export default useTastingSheetSelectValue
