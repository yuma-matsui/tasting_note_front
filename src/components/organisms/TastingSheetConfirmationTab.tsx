import { FC, memo } from 'react'
import { useConfirmationTabItems, useTastingSheetFormItems } from '../../hooks'

import { formTitleFormat } from '../../utils'
import { AppearanceTabItems, ConclusionTabItems, FlavorTabItems, TasteTabItems } from '../molecules'

const TastingSheetConfirmationTab: FC = memo(() => {
  const { formItems } = useTastingSheetFormItems()
  const { selectedTab, onClickTabChange } = useConfirmationTabItems()

  return (
    <>
      <div className="tabs tabs-boxed">
        {formItems.map(({ type }) => (
          <button
            key={type}
            type="button"
            className={`tab ${selectedTab === type ? 'tab-active' : ''}`}
            onClick={() => onClickTabChange(type)}
          >
            {formTitleFormat(type)}
          </button>
        ))}
      </div>
      {formItems.map(({ type, items, options }) => (
        <div key={type}>
          {options && selectedTab === 'conclusion' && <ConclusionTabItems items={items} options={options} />}
          {selectedTab === 'appearance' && <AppearanceTabItems items={items} />}
          {selectedTab === 'flavor' && <FlavorTabItems items={items} />}
          {selectedTab === 'taste' && <TasteTabItems items={items} />}
        </div>
      ))}
    </>
  )
})

export default TastingSheetConfirmationTab
