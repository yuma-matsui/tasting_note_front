import useTastingSheetContext from '../useTastingSheetContext'
import useConclusionNameCheck from './useConclusionNameCheck'

const useConclusionStatus = (name: string, label: string) => {
  const {
    tastingSheet: { conclusion }
  } = useTastingSheetContext()
  const { isValidName } = useConclusionNameCheck()

  if (!isValidName(name)) throw new Error('不正な呼び出し方です。')

  const checked = conclusion[name] === label
  const disabled = false

  return { checked, disabled }
}

export default useConclusionStatus
