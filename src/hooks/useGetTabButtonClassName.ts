import { TastingSheet } from '../types'

const useGetTabButtonClassName = () => {
  const getTabButtonClassName = ({ color }: TastingSheet, isShow: boolean) => {
    let tabButtonClassName = 'tab'
    if (isShow) tabButtonClassName += ' tab-active'
    tabButtonClassName += color === 'red' ? ' tab-error' : ' tab-success'

    return tabButtonClassName
  }

  return {
    getTabButtonClassName
  }
}

export default useGetTabButtonClassName
