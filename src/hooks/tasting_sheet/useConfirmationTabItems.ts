import { useState } from 'react'
import { TastingSheetAllName, TastingSheetFormType } from '../../types'
import { formResultFormat, isAppearanceName, isConclusionName, isFlavorName, isTasteName } from '../../utils'
import useTastingSheetContext from './useTastingSheetContext'

const useConfirmationTabItems = () => {
  const { tastingSheet } = useTastingSheetContext()
  const [selectedTab, setSelectedTab] = useState<string>('appearance')

  const onClickTabChange = (type: string) => setSelectedTab(type)

  const isShow = (type: TastingSheetFormType) => selectedTab === type

  const getFormResult = (name: TastingSheetAllName): string | null => {
    let result: string | string[] | null | undefined
    if (isAppearanceName(name)) result = tastingSheet.appearance[name]
    if (isFlavorName(name)) result = tastingSheet.flavor[name]
    if (isTasteName(name)) result = tastingSheet.taste[name]
    if (isConclusionName(name)) result = tastingSheet.conclusion[name]
    return formResultFormat(result)
  }

  return {
    isShow,
    onClickTabChange,
    getFormResult
  }
}

export default useConfirmationTabItems
