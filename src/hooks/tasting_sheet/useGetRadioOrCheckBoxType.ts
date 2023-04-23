const useGetRadioOrCheckBoxClassName = (isCheckBox: boolean) => {
  const type = isCheckBox ? 'checkbox' : 'radio'

  return {
    type
  }
}

export default useGetRadioOrCheckBoxClassName
