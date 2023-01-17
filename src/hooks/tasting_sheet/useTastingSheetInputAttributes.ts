import { TastingSheetPropertyType } from '../../types'

const useTastingSheetInputsAttributes = () => {
  const isMultipleInputs = (value: TastingSheetPropertyType): value is string[] => value instanceof Array

  const isDisabled = (value: TastingSheetPropertyType, label: string) =>
    isMultipleInputs(value) && value.length === 2 && !value.includes(label)

  const getValidationMethod = (value: TastingSheetPropertyType) => {
    if (isMultipleInputs(value))
      return {
        twoRequired: (result: TastingSheetPropertyType) =>
          (isMultipleInputs(result) && result.length > 1) || '2つ選択してください'
      }

    return {
      oneRequired: (result: TastingSheetPropertyType) =>
        (!isMultipleInputs(result) && result !== '') || '1つ選択してください'
    }
  }

  return {
    isMultipleInputs,
    isDisabled,
    getValidationMethod
  }
}

export default useTastingSheetInputsAttributes
