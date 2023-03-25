import { FC, memo } from 'react'
import { useDetailsTabItems, useTastingSheetLabels } from '../../hooks'

import { TastingSheet } from '../../types'
import { formTitleFormat } from '../../utils'
import { SheetOrWineDetailsDataList } from '../molecules'
import { TastingSheetFormWrapper } from '../templates'

const TastingSheetDetailsTab: FC<{ tastingSheet: TastingSheet }> = memo(({ tastingSheet }) => {
  const labels = useTastingSheetLabels(tastingSheet.color)
  const { isShow, onClickTabChange, getFormResult } = useDetailsTabItems(tastingSheet)

  return (
    <TastingSheetFormWrapper title="confirmation">
      <div className="tabs tabs-boxed">
        {labels.map(({ type }) => (
          <button
            key={type}
            type="button"
            className={`tab ${isShow(type) ? 'tab-active' : ''}`}
            onClick={() => onClickTabChange(type)}
          >
            {formTitleFormat(type)}
          </button>
        ))}
      </div>
      {labels.map(({ type, items, options }) => (
        <dl key={type}>
          {[...items, ...options].map(
            ({ heading, name, subHeading }) =>
              isShow(type) && (
                <SheetOrWineDetailsDataList
                  key={heading}
                  title={heading}
                  subTitle={subHeading}
                  content={getFormResult(name)}
                />
              )
          )}
        </dl>
      ))}
    </TastingSheetFormWrapper>
  )
})

export default TastingSheetDetailsTab
