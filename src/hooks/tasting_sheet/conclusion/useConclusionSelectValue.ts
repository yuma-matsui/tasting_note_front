import useTastingSheetContext from '../useTastingSheetContext'
import useConclusionNameCheck from './useConclusionNameCheck'

const useConclusionSelectValue = (name: string) => {
  const { tastingSheet } = useTastingSheetContext()
  const { isValidName } = useConclusionNameCheck()

  if (!isValidName(name)) throw new Error('不正な呼び出し方です。')

  const value = String(tastingSheet.conclusion[name])
  return { value }
}

export default useConclusionSelectValue
