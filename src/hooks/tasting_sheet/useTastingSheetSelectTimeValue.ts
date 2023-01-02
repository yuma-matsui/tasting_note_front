import useTastingSheetContext from './useTastingSheetContext'

const useTastingSheetSelectTimeValue = () => {
  const { tastingSheet } = useTastingSheetContext()
  const value = String(tastingSheet.time)

  return { value }
}

export default useTastingSheetSelectTimeValue
