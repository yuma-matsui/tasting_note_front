import useTastingSheetContext from '../useTastingSheetContext'
import useTasteNameCheck from './useTasteNameCheck'

const useTasteStatus = (name: string, label: string) => {
  const {
    tastingSheet: { taste }
  } = useTastingSheetContext()
  const { isValidName } = useTasteNameCheck()

  if (!isValidName(name)) throw new Error('不正な呼び出し方です。')

  const checked = taste[name] === label
  const disabled = false

  return { checked, disabled }
}

export default useTasteStatus
