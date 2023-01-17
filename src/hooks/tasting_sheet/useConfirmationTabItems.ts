import { useCallback, useState } from 'react'
import { TastingSheetAllName, TastingSheetFormType } from '../../types'
import { formResultFormat } from '../../utils'
import useTastingSheetContext from './useTastingSheetContext'

const useConfirmationTabItems = () => {
  const { tastingSheet } = useTastingSheetContext()
  const [selectedTab, setSelectedTab] = useState<string>('appearance')

  const onClickTabChange = (type: string) => setSelectedTab(type)

  const isShow = (type: TastingSheetFormType) => selectedTab === type

  const getFormResult = (name: TastingSheetAllName): string | null => {
    switch (name) {
      case 'clarity':
      case 'brightness':
      case 'appearanceColor':
      case 'intensity':
      case 'consistency':
      case 'appearanceImpression':
        return formResultFormat(tastingSheet.appearance[name])
      case 'flavorFirstImpression':
      case 'flavorFruit':
      case 'flavorFlower':
      case 'flavorSpice':
      case 'flavorImpression':
        return formResultFormat(tastingSheet.flavor[name])
      case 'attack':
      case 'sweetness':
      case 'acidity':
      case 'bitterness':
      case 'astringent':
      case 'alcohol':
      case 'balance':
      case 'afterTaste':
        return formResultFormat(tastingSheet.taste[name])
      case 'evaluation':
      case 'optimumTemperature':
      case 'glass':
      case 'decantage':
      case 'country':
      case 'grape':
      case 'vintage':
        return formResultFormat(tastingSheet.conclusion[name])
      default:
        throw new Error('不正な呼び出し方です。')
    }
  }

  return {
    isShow,
    onClickTabChange,
    getFormResult
  }
}

export default useConfirmationTabItems
