import { FC, memo } from 'react'
import { useDetailsTabItems } from '../../hooks'

import { DetailsTabProps } from '../../types'
import { formTitleFormat } from '../../utils'
import { TastingSheetDetailsDataList } from '../molecules'
import { TastingSheetFormWrapper } from '../templates'

const TastingSheetDetailsTab: FC<DetailsTabProps> = memo(({ formItems }) => {
  const { isShow, onClickTabChange, getFormResult } = useDetailsTabItems()

  return (
    <TastingSheetFormWrapper title="confirmation">
      <div className="tabs tabs-boxed">
        {formItems.map(({ type }) => (
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
      {formItems.map(({ type, items, options }) => (
        <div key={type}>
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
        </div>
      ))}
    </TastingSheetFormWrapper>
  )
})

export default TastingSheetDetailsTab
