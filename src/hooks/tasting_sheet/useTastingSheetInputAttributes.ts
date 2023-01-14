const useTastingSheetInputsAttributes = () => {
  const isMultipleInputs = (value: string | string[]) => value instanceof Array

  const isDisabled = (value: string | string[], label: string) =>
    isMultipleInputs(value) && value.length === 2 && !value.includes(label)

  const getValidationMethod = (value: string | string[]) => {
    if (isMultipleInputs(value))
      return {
        twoRequired: (result: string | string[]) =>
          (isMultipleInputs(result) && result.length > 1) || '2つ選択してください'
      }

    return {
      oneRequired: (result: string | string[]) => (!isMultipleInputs(result) && result !== '') || '1つ選択してください'
    }
  }

  return {
    isMultipleInputs,
    isDisabled,
    getValidationMethod
  }
}

export default useTastingSheetInputsAttributes
