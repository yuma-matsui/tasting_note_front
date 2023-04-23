const useGetCheckBoxClassName = (type: string) =>
  type === 'checkbox' ? 'checkbox checkbox-sm checkbox-primary' : 'radio radio-sm radio-primary'

export default useGetCheckBoxClassName
