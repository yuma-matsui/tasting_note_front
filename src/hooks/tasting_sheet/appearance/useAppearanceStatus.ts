import useTastingSheetContext from '../useTastingSheetContext'
import useAppearanceNameCheck from './useAppearanceNameCheck'

const useAppearanceStatus = (name: string, label: string) => {
  const {
    tastingSheet: { appearance }
  } = useTastingSheetContext()
  const { isValidName } = useAppearanceNameCheck()

  if (!isValidName(name)) throw new Error('不正な呼び出し方です。')

  const isColorOrImpression = () => name === 'appearanceColor' || name === 'appearanceImpression'

  const checked = isColorOrImpression() ? appearance[name].includes(label) : appearance[name] === label
  const disabled = isColorOrImpression() ? appearance[name].length === 2 && !appearance[name].includes(label) : false

  return { checked, disabled }
}

export default useAppearanceStatus
