const useGetSearchRadioLabel = (color: string) => {
  let label = '指定なし'
  if (color === 'white') label = '白'
  if (color === 'red') label = '赤'

  return label
}

export default useGetSearchRadioLabel
