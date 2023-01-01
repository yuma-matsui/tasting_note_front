import useTastingSheetContext from '../useTastingSheetContext'
import useFlavorNameCheck from './useFlavorNameCheck'

const useFlavorStatus = (name: string, label: string) => {
  const {
    tastingSheet: { flavor }
  } = useTastingSheetContext()
  const { isValidName } = useFlavorNameCheck()

  if (!isValidName(name)) throw new Error('不正な呼び出し方です。')

  const checked = flavor[name].includes(label)
  const disabled = flavor[name].length === 2 && !flavor[name].includes(label)

  return { checked, disabled }
}

export default useFlavorStatus
