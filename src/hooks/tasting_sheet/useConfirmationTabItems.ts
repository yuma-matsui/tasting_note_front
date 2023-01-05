import { useState } from 'react'

const useConfirmationTabItems = () => {
  const [selectedTab, setSelectedTab] = useState<string>('appearance')
  const onClickTabChange = (type: string) => setSelectedTab(type)

  return { selectedTab, onClickTabChange }
}

export default useConfirmationTabItems
