import { FC, memo } from 'react'
import { useDetailsTabItems } from '../../hooks'

import { DetailsTabProps } from '../../types'
import { formTitleFormat } from '../../utils'
import { TastingSheetDetailsDataList } from '../molecules'
import { TastingSheetFormWrapper } from '../templates'

const TastingSheetDetailsTab: FC<DetailsTabProps> = memo(({ labels }) => {
  const { isShow, onClickTabChange, getFormResult } = useDetailsTabItems()

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
                <TastingSheetDetailsDataList
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
