import { FC, memo } from 'react'

import { useConfirmationTabItems } from '../../hooks'
import { ConfirmationTabProps } from '../../types'
import { formTitleFormat } from '../../utils'
import { TastingSheetConfirmationDataList } from '../molecules'
import { TastingSheetFormWrapper } from '../templates'

const TastingSheetConfirmationTab: FC<ConfirmationTabProps> = memo(({ formItems }) => {
  const { isShow, onClickTabChange, getFormResult } = useConfirmationTabItems()

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
                <TastingSheetConfirmationDataList
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

export default TastingSheetConfirmationTab
