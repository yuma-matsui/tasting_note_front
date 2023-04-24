const useGetButtonsFlexType = () => {
  const getButtonsFlexType = (isFirstStep: boolean) => (isFirstStep ? 'justify-center' : 'justify-between')

  return {
    getButtonsFlexType
  }
}

export default useGetButtonsFlexType
