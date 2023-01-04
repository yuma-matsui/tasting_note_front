import { FC } from 'react'

import { useTasteNameCheck, useTastingSheetContext } from '../../../hooks'
import { ConfirmationTabItemsProps } from '../../../types'
import { formResultFormat } from '../../../utils'
import TastingSheetConfirmationDataList from '../TastingSheetConfirmationDataList'

const TasteTabItems: FC<ConfirmationTabItemsProps> = ({ items }) => {
  const { tastingSheet } = useTastingSheetContext()
  const { isValidName } = useTasteNameCheck()

  return (
    <>
      {items.map(
        ({ heading, name, subHeading }) =>
          isValidName(name) && (
            <TastingSheetConfirmationDataList
              key={heading}
              title={heading}
              subTitle={subHeading}
              content={formResultFormat(tastingSheet.taste[name])}
            />
          )
      )}
    </>
  )
}

export default TasteTabItems
