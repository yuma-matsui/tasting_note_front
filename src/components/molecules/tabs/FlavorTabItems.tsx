import { FC } from 'react'

import { useFlavorNameCheck, useTastingSheetContext } from '../../../hooks'
import { ConfirmationTabItemsProps } from '../../../types'
import { formResultFormat } from '../../../utils'
import TastingSheetConfirmationDataList from '../TastingSheetConfirmationDataList'

const FlavorTabItems: FC<ConfirmationTabItemsProps> = ({ items }) => {
  const { tastingSheet } = useTastingSheetContext()
  const { isValidName } = useFlavorNameCheck()

  return (
    <>
      {items.map(
        ({ heading, name, subHeading }) =>
          isValidName(name) && (
            <TastingSheetConfirmationDataList
              key={heading}
              title={heading}
              subTitle={subHeading}
              content={formResultFormat(tastingSheet.flavor[name])}
            />
          )
      )}
    </>
  )
}

export default FlavorTabItems
