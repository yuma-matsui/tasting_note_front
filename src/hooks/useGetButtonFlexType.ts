const useGetButtonFlexType = () => {
  const getButtonFlexType = (isFirstStep: boolean) => (isFirstStep ? 'justify-center' : 'justify-between')

  return {
    getButtonFlexType
  }
}

export default useGetButtonFlexType
