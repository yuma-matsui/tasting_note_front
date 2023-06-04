const useGetButtonsFlexType = () => {
  const getButtonFlexType = (isFirstStep: boolean) => (isFirstStep ? 'justify-center' : 'justify-between')

  return {
    getButtonFlexType
  }
}

export default useGetButtonsFlexType
