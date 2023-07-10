import { useState } from 'react'

import { TastingSheet, TastingSheetAllName, TastingSheetFormType, TastingSheetPropertyType } from '../../types'
import { formResultFormat, isAppearanceName, isConclusionName, isFlavorName, isTasteName } from '../../utils'

const useDetailsTabItems = (tastingSheet: TastingSheet) => {
  const [selectedTab, setSelectedTab] = useState<string>('appearance')

  const onClickTabChange = (type: string) => setSelectedTab(type)

  const isShow = (type: TastingSheetFormType) => selectedTab === type

  const getFormResult = (name: TastingSheetAllName): string | null => {
    let result: TastingSheetPropertyType = ''
    if (isAppearanceName(name)) result = tastingSheet.appearance[name]
    if (isFlavorName(name)) result = tastingSheet.flavor[name]
    if (isTasteName(name)) result = tastingSheet.taste[name]
    if (isConclusionName(name)) result = tastingSheet.conclusion[name]
    return formResultFormat(result)
  }

  return {
    getFormResult,
    isShow,
    onClickTabChange
  }
}

export default useDetailsTabItems
