import { FC, memo } from 'react'
import { useDetailsTabItems, useGetTabButtonClassName, useTastingSheetLabels } from '../../hooks'

import { TastingSheet } from '../../types'
import { formTitleFormat } from '../../utils'
import { SheetOrWineDetailsDataList } from '../molecules'
import { TastingSheetFormWrapper } from '../templates'

const TastingSheetDetailsTab: FC<{ tastingSheet: TastingSheet }> = memo(({ tastingSheet }) => {
  const labels = useTastingSheetLabels(tastingSheet.color)
  const { getFormResult, isShow, onClickTabChange } = useDetailsTabItems(tastingSheet)
  const { getTabButtonClassName } = useGetTabButtonClassName()

  return (
    <TastingSheetFormWrapper title="confirmation">
      <div className="tabs tabs-boxed mt-4 w-full flex justify-between">
        {labels.map(({ type }) => (
          <button
            key={type}
            type="button"
            className={getTabButtonClassName(tastingSheet, isShow(type))}
            onClick={() => onClickTabChange(type)}
          >
            {formTitleFormat(type)}
          </button>
        ))}
      </div>
      <div className="my-6 w-full border-black border-2">
        {labels.map(({ items, options, type }) => (
          <dl key={type}>
            {[...items, ...options].map(
              ({ name, heading, subHeading }) =>
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
      </div>
    </TastingSheetFormWrapper>
  )
})

export default TastingSheetDetailsTab
